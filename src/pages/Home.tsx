
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Icon from "@/components/ui/icon";

const Home = () => {
  return (
    <div className="min-h-screen rust-background">
      <NavBar />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12 relative">
        {/* Декоративный элемент */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
        
        <h2 className="text-3xl font-bold text-amber-500 mb-12 text-center rust-title">Добро пожаловать в Rust Maze Rust</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/90 border-amber-600/50 hover:shadow-md hover:shadow-amber-500/20 transition-all backdrop-blur-sm rust-container">
            <CardHeader>
              <CardTitle className="text-amber-500 flex items-center gap-2">
                <Icon name="Newspaper" size={20} />
                Последние новости
              </CardTitle>
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
              <CardTitle className="text-amber-500 flex items-center gap-2">
                <Icon name="Shield" size={20} />
                Правила сервера
              </CardTitle>
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
              <CardTitle className="text-amber-500 flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Поддержать проект
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Вы можете поддержать развитие Rust Maze Rust и получить доступ к эксклюзивным возможностям.</p>
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900" asChild>
                <Link to="/donate">Поддержать</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Секция особенностей */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-amber-500 mb-8 text-center rust-title">Особенности проекта</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 p-6 rounded-lg border border-amber-800/20 backdrop-blur-sm flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Icon name="Maze" size={24} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-amber-500 text-xl mb-2">Уникальные лабиринты</h3>
                <p className="text-gray-300">Исследуйте сложные лабиринты с ловушками, головоломками и секретными проходами.</p>
              </div>
            </div>
            
            <div className="bg-slate-800/80 p-6 rounded-lg border border-amber-800/20 backdrop-blur-sm flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Icon name="Swords" size={24} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-amber-500 text-xl mb-2">PvP арены</h3>
                <p className="text-gray-300">Сразитесь с другими игроками на специальных аренах с различными модификаторами.</p>
              </div>
            </div>
            
            <div className="bg-slate-800/80 p-6 rounded-lg border border-amber-800/20 backdrop-blur-sm flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-amber-500 text-xl mb-2">Еженедельные турниры</h3>
                <p className="text-gray-300">Участвуйте в турнирах и соревнованиях с ценными призами и наградами.</p>
              </div>
            </div>
            
            <div className="bg-slate-800/80 p-6 rounded-lg border border-amber-800/20 backdrop-blur-sm flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Icon name="Users" size={24} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-amber-500 text-xl mb-2">Дружное сообщество</h3>
                <p className="text-gray-300">Присоединяйтесь к активному сообществу игроков, администраторов и разработчиков.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
          <div className="bg-slate-800/60 p-4 rounded-lg border border-amber-800/20 text-center">
            <span className="text-amber-500 text-3xl font-bold">5+</span>
            <p className="text-gray-300 mt-1 text-sm">Уникальных лабиринтов</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-lg border border-amber-800/20 text-center">
            <span className="text-amber-500 text-3xl font-bold">100+</span>
            <p className="text-gray-300 mt-1 text-sm">Игроков онлайн</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-lg border border-amber-800/20 text-center">
            <span className="text-amber-500 text-3xl font-bold">3</span>
            <p className="text-gray-300 mt-1 text-sm">Активных сервера</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-lg border border-amber-800/20 text-center">
            <span className="text-amber-500 text-3xl font-bold">24/7</span>
            <p className="text-gray-300 mt-1 text-sm">Техническая поддержка</p>
          </div>
        </div>
        
        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/30 p-8 rounded-lg border border-amber-800/20 text-center mt-16">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">Готовы начать приключение?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Присоединяйтесь к нашему проекту прямо сейчас и станьте частью удивительного мира Rust Maze Rust!</p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg">
            Начать игру
          </Button>
        </div>
        
        {/* Декоративный элемент внизу */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-8"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
