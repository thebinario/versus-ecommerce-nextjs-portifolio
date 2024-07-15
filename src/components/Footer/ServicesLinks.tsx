const ServicesLinks = () => (
    <div>
        <p className="font-medium text-gray-900 dark:text-gray-100">Services</p>
        <ul className="mt-6 space-y-4 text-sm">
            {['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'].map(service => (
                <li key={service}>
                    <a href="#" className="text-gray-700 dark:text-gray-300 transition hover:opacity-75">{service}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default ServicesLinks;
