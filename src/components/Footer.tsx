
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Rust Maze Rust</h3>
            <p className="mb-4">
              Уникальный проект с лабиринтами, PvP аренами и захватывающими испытаниями в мире Rust.
            </p>
            <div className="flex gap-4">
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="DiscordLogo" size={24} />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="Globe" size={24} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                <Icon name="Send" size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Главная</Link></li>
              <li><Link to="/news" className="hover:text-amber-500 transition-colors">Новости</Link></li>
              <li><Link to="/rules" className="hover:text-amber-500 transition-colors">Правила</Link></li>
              <li><Link to="/donate" className="hover:text-amber-500 transition-colors">Донат</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Сервера</h3>
            <ul className="space-y-2">
              <li>Лабиринт #1: 192.168.1.1:28015</li>
              <li>Арена #1: 192.168.1.2:28015</li>
              <li>Выживание: 192.168.1.3:28015</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>support@rustmaze.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageSquare" size={18} />
                <span>Discord: RustMaze</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Rust Maze Rust. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-amber-500 mr-4">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-gray-400 hover:text-amber-500">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
