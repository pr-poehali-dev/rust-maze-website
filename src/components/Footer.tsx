
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-amber-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Rust Maze Rust</h3>
            <p className="text-gray-400">
              Уникальный проект с лабиринтами, PvP аренами и захватывающими испытаниями в мире Rust.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://discord.gg" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="Discord" size={20} />
              </a>
              <a href="https://vk.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Донат
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Сервера</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Основной сервер (48/100)
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                PvP арена (29/50)
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                Лабиринт (45/50)
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Тестовый (0/20)
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start">
                <Icon name="Mail" size={20} className="mr-2 mt-1 shrink-0" />
                <span>support@rustmaze.ru</span>
              </li>
              <li className="text-gray-400 flex items-start">
                <Icon name="MessagesSquare" size={20} className="mr-2 mt-1 shrink-0" />
                <span>Discord: Rust Maze Rust</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rust Maze Rust. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/rules" className="text-gray-500 hover:text-amber-500 text-sm">
              Правила
            </Link>
            <Link to="/donate" className="text-gray-500 hover:text-amber-500 text-sm">
              Донат
            </Link>
            <Link to="/rules" className="text-gray-500 hover:text-amber-500 text-sm">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
