const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-border">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Janani I. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
