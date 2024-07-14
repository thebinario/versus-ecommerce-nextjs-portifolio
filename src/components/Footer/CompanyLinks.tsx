const CompanyLinks = () => (
    <div>
        <p className="font-medium text-gray-900">Company</p>
        <ul className="mt-6 space-y-4 text-sm">
            {['About', 'Meet the Team', 'Accounts Review'].map(link => (
                <li key={link}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default CompanyLinks;
