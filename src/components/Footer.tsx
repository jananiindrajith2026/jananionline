const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold text-foreground">
              Janani<span className="text-primary">.</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © Copyright 2024 – {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
