import { useState } from 'react'
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import Projects from './dashboard/Projects'
import Certificates from './dashboard/Certificates'
import Comments from './dashboard/Comments'
import { FolderGit2, Award, MessageSquare, LogOut, LayoutDashboard, Menu } from 'lucide-react'

const NAV_ITEMS = [
  { to: 'projects', label: 'Projects', icon: FolderGit2 },
  { to: 'certificates', label: 'Certificates', icon: Award },
  { to: 'comments', label: 'Comments', icon: MessageSquare },
]

export default function Dashboard() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-5 gap-6">
      {/* Logo */}
      <div className="flex items-center gap-3 px-1 shrink-0">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-50" />
          <div className="relative w-9 h-9 bg-[#030014] rounded-xl border border-white/15 flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-indigo-400" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Dashboard</p>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>

      {/* Badge */}
      <div className="shrink-0 px-3 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span className="text-indigo-300 text-xs font-medium">Portfolio Manager</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1 min-h-0">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest px-3 mb-2 shrink-0">Menu</p>
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
          const active = location.pathname.includes(to)
          return (
            <Link
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium shrink-0 ${
                active
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/15 border border-indigo-500/30 text-white'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-indigo-400' : ''}`} />
              {label}
              {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="shrink-0 flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/15 transition-all duration-200 text-sm"
      >
        <LogOut className="w-4 h-4 shrink-0" />
        Sign Out
      </button>
    </div>
  )

  return (
    // Kunci: TIDAK pakai overflow-hidden di sini supaya scrollbar main bisa diklik
    <div className="flex text-white" style={{ height: '100dvh' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - desktop: sticky, tinggi 100dvh */}
      <aside
        className="hidden lg:flex w-60 shrink-0 flex-col border-r border-white/8 bg-white/3 backdrop-blur-xl"
        style={{ height: '100dvh', position: 'sticky', top: 0 }}
      >
        <SidebarContent />
      </aside>

      {/* Sidebar - mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-60 flex flex-col border-r border-white/8 bg-[#0a0a1a] backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-white/3 backdrop-blur-xl shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium text-white">Dashboard</span>
        </div>

        {/* Hanya main yang overflow-y-auto — scrollbar bisa diklik normal */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route index element={<Navigate to="projects" replace />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="comments" element={<Comments />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}