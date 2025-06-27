const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-sm text-gray-500 dark:text-gray-400 text-center py-6 mt-12 border-t border-gray-200 dark:border-gray-700">
            <p>&copy; {year} Sebastian Oßner. All rights reserved.</p>
            <p className="mt-1">This site contains selected personal projects, some of which will be outdated or broken.</p>
        </footer>
    );
};

export default Footer;