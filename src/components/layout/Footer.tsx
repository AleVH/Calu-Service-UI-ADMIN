// src/components/layout/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-100 text-sm text-center py-2 border-t border-gray-200">
            &copy; {new Date().getFullYear()} Your Company
        </footer>
    )
}
