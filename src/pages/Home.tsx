
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen rust-background">
      <NavBar />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12 relative">
        {/* Декоративный элемент */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
        
        <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center rust-title">Добро пожаловать в Rust Maze Rust</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/90 border-amber-600/50 hover:shadow-md hover:shadow-amber-500/20 transition-all backdrop-blur-sm rust-container">
            <CardHeader>
              <CardTitle className="text-amber-500">Последние новости</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Узнайте о последних обновлениях, событиях и изменениях в мире Rust Maze Rust.</p>
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900" asChild>
                <Link to="/news">Перейти к новостям</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/90 border-amber-600/50 hover:shadow-md hover:shadow-amber-500/20 transition-all backdrop-blur-sm rust-container">
            <CardHeader>
              <CardTitle className="text-amber-500">Правила сервера</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Ознакомьтесь с правилами нашего сервера, чтобы избежать проблем и сделать игру приятной для всех.</p>
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900" asChild>
                <Link to="/rules">Прочитать правила</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/90 border-amber-600/50 hover:shadow-md hover:shadow-amber-500/20 transition-all backdrop-blur-sm rust-container">
            <CardHeader>
              <CardTitle className="text-amber-500">Поддержать проект</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Вы можете поддержать развитие Rust Maze Rust и получить доступ к эксклюзивным возможностям.</p>
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900" asChild>
                <Link to="/donate">Поддержать</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Декоративный элемент внизу */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-8"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
