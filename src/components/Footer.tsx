const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="font-display text-xl font-bold text-foreground mb-3">
          Janani<span className="text-primary">.</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © Copyright 2024 – {new Date().getFullYear()} | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
