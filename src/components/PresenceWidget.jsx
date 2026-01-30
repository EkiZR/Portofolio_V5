import { useEffect, useState } from "react";
import { Music2, Code2, Gamepad2, Headphones } from "lucide-react";

export default function PresenceWidget() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/presence");
        const data = await res.json();

        const normalized = (data.activities || [])
          .slice(0, 2)
          .map((a, idx) => {
            if (a.type === "spotify") {
              return {
                key: `spotify-${idx}`,
                title: a.title,
                subtitle: a.artist,
                image: a.image,
                type: "spotify",
                icon: "spotify",
                iconImage: a.iconImage || null
              };
            }

            if (a.type === "coding") {
              return {
                key: `coding-${idx}`,
                title: a.details || "Coding",
                subtitle: a.state || a.app,
                type: "coding",
                icon: "vscode",
                iconImage: a.iconImage || null
              };
            }

            return {
              key: `activity-${idx}`,
              title: a.name || "Playing a Game",
              subtitle: a.state || a.type,
              type: a.type || "unknown",
              icon: "gaming",
              iconImage: a.iconImage || null
            };
          });

        setActivities(normalized);
      } catch (error) {
        console.error("Failed to fetch presence:", error);
      }
    };

    fetchPresence();
    const interval = setInterval(fetchPresence, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!activities.length) return null;

  const getIcon = (iconType, className = "w-5 h-5 ") => {
    const icons = {
      spotify: <Music2 className={className}/>,
      vscode: <Code2 className={className} />,
      gaming: <Gamepad2 className={className} />,
      default: <Headphones className={className} />
    };
    return icons[iconType] || icons.default;
  };

  const getColors = (type) => {
    const colors = {
      spotify: {
        bg: "from-green-500/15 to-emerald-500/10",
        border: "border-green-500/30",
        text: "text-green-400",
        badge: "bg-green-500/20 border-green-400/40",
        glow: "shadow-green-500/20"
      },
      coding: {
        bg: "from-blue-500/15 to-indigo-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        badge: "bg-blue-500/20 border-blue-400/40",
        glow: "shadow-blue-500/20"
      },
      gaming: {
        bg: "from-red-500/15 to-pink-500/10",
        border: "border-red-500/30",
        text: "text-red-400",
        badge: "bg-red-500/20 border-red-400/40",
        glow: "shadow-red-500/20"
      },
      default: {
        bg: "from-purple-500/15 to-violet-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        badge: "bg-purple-500/20 border-purple-400/40",
        glow: "shadow-purple-500/20"
      }
    };
    return colors[type] || colors.default;
  };

  const getActivityLabel = (type) => {
    const labels = {
      spotify: "NOW PLAYING",
      coding: "CODING",
      gaming: "PLAYING",
      default: "ACTIVE"
    };
    return labels[type] || labels.default;
  };

  return (
    <div className="">
      <div className="w-full space-y-2">
        {activities.map((act) => {
          const colors = getColors(act.type);
          
          return (
            <div key={act.key} className="group relative ">
              {/* Glass Card */}
              <div className={`relative backdrop-blur-md bg-gradient-to-br ${colors.bg} rounded-xl border ${colors.border} ${colors.glow} shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
                <div className="p-3 flex items-center gap-2.5">
                  
                  {/* Icon/Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
                      {act.image ? (
                        <img 
                          src={act.image} 
                          alt={act.title}
                          className="w-full h-full object-cover"
                        />
                      ) : act.iconImage ? (
                        <div className="w-full h-full flex items-center justify-center p-2">
                          <img 
                            src={act.iconImage} 
                            alt={act.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className={colors.text}>
                            {getIcon(act.icon, "w-7 h-7")}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Music bars - hanya Spotify */}
                    {act.type === "spotify" && (
                      <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded p-0.5 shadow-lg">
                        <div className="flex items-end gap-0.5 h-2">
                          <div className="w-0.5 bg-white rounded-full animate-music-1"></div>
                          <div className="w-0.5 bg-white rounded-full animate-music-2"></div>
                          <div className="w-0.5 bg-white rounded-full animate-music-3"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex-1 min-w-0">
                    <div className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded ${colors.badge} border backdrop-blur-sm mb-1`}>
                      <div className={`w-1 h-1 rounded-full ${colors.text.replace('text-', 'bg-')} animate-pulse`}></div>
                      <span className={`text-[9px] pt-[0.5px] font-bold ${colors.text} uppercase tracking-wider`}>
                        {getActivityLabel(act.type)}
                      </span>
                    </div>
                    
                    <h3 className="text-white font-bold text-sm truncate mb-0.5">
                      {act.title}
                    </h3>
                    <p className="text-white/60 text-xs truncate">
                      {act.subtitle}
                    </p>
                  </div>

                  {/* Spotify Icon - pojok kanan */}
                  {act.type === "spotify" && (
                    <div className="">
                      <img src="Spotify.png" className="w-auto h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300" alt="" />
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes music-1 {
          0%, 100% { height: 30%; }
          50% { height: 90%; }
        }
        @keyframes music-2 {
          0%, 100% { height: 60%; }
          50% { height: 100%; }
        }
        @keyframes music-3 {
          0%, 100% { height: 40%; }
          50% { height: 85%; }
        }
        
        .animate-music-1 { animation: music-1 0.6s ease-in-out infinite; }
        .animate-music-2 { animation: music-2 0.6s ease-in-out 0.15s infinite; }
        .animate-music-3 { animation: music-3 0.6s ease-in-out 0.3s infinite; }
      `}</style>
    </div>
  );
}