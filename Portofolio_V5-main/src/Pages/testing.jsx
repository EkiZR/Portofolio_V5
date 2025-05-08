import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestAOS = () => {
    useEffect(() => {
        // Inisialisasi AOS
        AOS.init();

        // Function untuk mengecek will-change property
        const checkWillChange = () => {
            // Mengambil semua elemen dengan data-aos
            const aosElements = document.querySelectorAll('[data-aos]');
            
            console.log(`Ditemukan ${aosElements.length} elemen dengan data-aos`);
            
            aosElements.forEach((element, index) => {
                // Tambahkan border pada elemen
                element.style.border = '2px dashed red';
                
                // Mengambil computed style
                const computedStyle = window.getComputedStyle(element);
                const willChange = computedStyle.getPropertyValue('will-change');
                
                console.log(`Element ${index + 1}:`, {
                    'data-aos': element.getAttribute('data-aos'),
                    'will-change': willChange,
                    'element': element.tagName,
                    'classes': element.className
                });
            });
        };

        // Jalankan pengecekan setelah AOS diinisialisasi
        setTimeout(checkWillChange, 100);
    }, []);

    return (
        <>
            <style>
                {`
                    [data-aos] {
                        will-change: transform, opacity !important;
                    }
                `}
            </style>

           
        </>
    );
};

export default TestAOS;
