/* main.js — IEEE UNCP Linktree
Interacciones ligeras, sin dependencias externas
*/

// Ripple effect en botones de links
document.querySelectorAll('.link-btn, .btn-back').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(0, 98, 155, 0.18);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleAnim 0.55s ease-out forwards;
        pointer-events: none;
    `;

        this.style.position = this.style.position || 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Inyectar keyframes del ripple una sola vez
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnim {
    to { transform: scale(2.5); opacity: 0; }
    }
`;
document.head.appendChild(style);
