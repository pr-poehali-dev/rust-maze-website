
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Слушатель скролла для добавления эффекта непрозрачности навбару
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Новости", path: "/news" },
    { name: "Правила", path: "/rules" },
    { name: "Донат", path: "/donate" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-amber-500">Rust Maze Rust</span>
          </Link>

          {/* Десктоп навигация */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" className="bg-amber-500 hover:bg-amber-600 text-black">
              Войти
            </Button>
          </div>

          {/* Мобильная навигация */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-200"
                aria-label="Открыть меню"
              >
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-amber-800">
              <div className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-300 hover:text-amber-500 transition-colors text-lg py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="default" className="bg-amber-500 hover:bg-amber-600 text-black mt-4">
                  Войти
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
