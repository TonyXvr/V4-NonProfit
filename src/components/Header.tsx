import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  const router = useRouter();

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

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

          <Button className="md:hidden" variant="outline">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;