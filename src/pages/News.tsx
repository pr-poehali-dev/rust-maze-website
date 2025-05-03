
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const NewsPage = () => {
  // Примеры новостей
  const news = [
    {
      id: 1,
      title: "Открытие нового лабиринта 'Шахты'",
      date: "01.05.2025",
      content: "Мы рады сообщить об открытии нового лабиринта 'Шахты'. Это сложное испытание с множеством ловушек и загадок. Самые смелые игроки получат уникальные награды!",
      image: "https://images.unsplash.com/photo-1595424083276-0b734bdab188?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Обновление систем безопасности",
      date: "28.04.2025",
      content: "Мы обновили системы безопасности на всех серверах. Теперь игра стала еще более защищенной от читеров и хакеров. Спасибо за ваши сообщения о подозрительном поведении игроков!",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Еженедельные турниры с наградами",
      date: "25.04.2025",
      content: "Начиная с этой недели, каждую субботу будут проводиться турниры на выживание с ценными призами. Регистрация открыта на нашем сервере Discord.",
      image: "https://images.unsplash.com/photo-1576240242350-d3a2daf7a74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171614] to-[#2D2A26]">
      <NavBar />
      
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">Новости Rust Maze Rust</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Следите за последними обновлениями, событиями и изменениями в мире нашего проекта.</p>
        </div>
        
        <div className="grid gap-8">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-slate-800 border-amber-800/50 hover:border-amber-600 transition-all">
              <div className="grid md:grid-cols-[300px_1fr] gap-4">
                <div className="h-64 md:h-auto">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    <Icon name="Calendar" size={16} />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-amber-500">{item.title}</CardTitle>
                  <CardContent className="text-gray-300 p-0">
                    <p>{item.content}</p>
                  </CardContent>
                  <div className="mt-6 flex gap-4">
                    <button className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
                      <Icon name="MessageSquare" size={16} />
                      <span>Комментарии (5)</span>
                    </button>
                    <button className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
                      <Icon name="Share2" size={16} />
                      <span>Поделиться</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
