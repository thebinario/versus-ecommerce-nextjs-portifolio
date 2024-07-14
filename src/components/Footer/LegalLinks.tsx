const LegalLinks = () => (
    <div>
        <p className="font-medium text-gray-900">Legal</p>
        <ul className="mt-6 space-y-4 text-sm">
            {['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'].map(link => (
                <li key={link}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default LegalLinks;
