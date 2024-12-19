import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="cursor-pointer flex items-center" onClick={() => router.push("/")}>
            <Logo />
            <span className="ml-2 text-xl font-bold text-primary">CyberQueen</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`text-muted-foreground hover:text-primary ${
                  router.pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => router.push(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] bg-background border-l border-primary/20">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className={`w-full justify-start text-lg ${
                      router.pathname === item.href ? 'text-primary border-l-2 border-primary pl-4' : 'text-muted-foreground'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.name}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;