
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainNavLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' }
  ];

  const educationLinks = [
    { name: 'Program Sarjana', href: '#education-sarjana' },
    { name: 'Program Magister', href: '#education-magister' },
    { name: 'Program Doktor', href: '#education-doktor' }
  ];

  const peopleLinks = [
    { name: 'Dosen & Staff', href: '#faculty-staff' },
    { name: 'Struktur Organisasi', href: '#structure' }
  ];

  const infoLinks = [
    { name: 'Visi & Misi', href: '#vision-mission' },
    { name: 'Akreditasi', href: '#accreditation' },
    { name: 'Mitra', href: '#partners' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 bg-anthropology-600 rounded-full flex items-center justify-center mr-3 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="text-white font-serif font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-serif font-bold leading-tight">
                  Departemen Antropologi
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Universitas Indonesia</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {mainNavLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink 
                      href={link.href}
                      className="nav-link"
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">Pendidikan</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {educationLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink 
                            href={link.href}
                            className="block p-2 hover:bg-accent/10 rounded-md"
                          >
                            {link.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">Orang</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {peopleLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink 
                            href={link.href}
                            className="block p-2 hover:bg-accent/10 rounded-md"
                          >
                            {link.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">Informasi</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {infoLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink 
                            href={link.href}
                            className="block p-2 hover:bg-accent/10 rounded-md"
                          >
                            {link.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-1 p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2 ml-2">Menu</h3>
          {mainNavLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="py-1 mt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2 ml-2">Pendidikan</h3>
            {educationLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-3 py-2 rounded-md hover:bg-muted transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="py-1">
            <h3 className="text-sm font-medium text-muted-foreground mb-2 ml-2">Orang</h3>
            {peopleLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-3 py-2 rounded-md hover:bg-muted transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="py-1">
            <h3 className="text-sm font-medium text-muted-foreground mb-2 ml-2">Informasi</h3>
            {infoLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-3 py-2 rounded-md hover:bg-muted transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
