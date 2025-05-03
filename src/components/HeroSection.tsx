
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="text-amber-500">RUST MAZE RUST</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Уникальный проект с лабиринтами, PvP аренами и захватывающими испытаниями
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg" 
            asChild
          >
            <Link to="/donate">Начать игру</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-amber-500 text-amber-500 hover:bg-amber-500/10 px-8 py-6 text-lg"
            asChild
          >
            <Link to="/rules">Узнать больше</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
