
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  return (
    <div className="min-h-screen rust-background">
      <NavBar />
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-24 h-24 rounded-full bg-amber-500/20 flex items-center justify-center mb-8">
          <Icon name="AlertTriangle" size={48} className="text-amber-500" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-amber-500 mb-4 text-center">404</h1>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-md">
          Страница не найдена. Возможно, она была перемещена или удалена.
        </p>
        
        <Button 
          className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg" 
          asChild
        >
          <Link to="/">
            Вернуться на главную
          </Link>
        </Button>
        
        <div className="mt-8 p-4 bg-slate-800/80 border border-amber-800/20 rounded-lg max-w-md text-center">
          <p className="text-gray-400">
            Если вы считаете, что это ошибка, пожалуйста, свяжитесь с нами по адресу 
            <a href="mailto:support@rustmaze.ru" className="text-amber-500 hover:underline ml-1">
              support@rustmaze.ru
            </a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
