const HelpfulLinks = () => (
    <div>
        <p className="font-medium text-gray-900 dark:text-gray-100">Helpful Links</p>
        <ul className="mt-6 space-y-4 text-sm">
            {['Contact', 'FAQs', 'Live Chat'].map(link => (
                <li key={link}>
                    <a href="#" className="text-gray-700 dark:text-gray-300 transition hover:opacity-75">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default HelpfulLinks;
