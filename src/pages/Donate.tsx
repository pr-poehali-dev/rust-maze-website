
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Icon from "@/components/ui/icon";

const DonatePage = () => {
  const plans = [
    {
      name: "Искатель",
      price: "299 ₽",
      description: "Базовый набор возможностей для новичков",
      features: [
        "Уникальный титул 'Искатель'",
        "Доступ к простым лабиринтам без очереди",
        "Скидка 5% на внутриигровой магазин",
        "1 предмет ежедневной награды"
      ],
      popular: false,
      color: "amber"
    },
    {
      name: "Разведчик",
      price: "599 ₽",
      description: "Расширенный набор возможностей для опытных игроков",
      features: [
        "Уникальный титул 'Разведчик'",
        "Доступ к средним лабиринтам без очереди",
        "Скидка 10% на внутриигровой магазин",
        "Уникальная кастомизация персонажа",
        "3 предмета ежедневной награды"
      ],
      popular: true,
      color: "amber"
    },
    {
      name: "Мастер",
      price: "999 ₽",
      description: "Полный набор возможностей для элитных игроков",
      features: [
        "Уникальный титул 'Мастер лабиринта'",
        "Доступ ко всем лабиринтам без очереди",
        "Скидка 15% на внутриигровой магазин",
        "Эксклюзивная кастомизация персонажа",
        "Приоритетная поддержка",
        "5 предметов ежедневной награды",
        "Доступ к закрытому Discord каналу"
      ],
      popular: false,
      color: "amber"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171614] to-[#2D2A26]">
      <NavBar />
      
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">Поддержать проект</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ваша поддержка помогает нам развивать проект, добавлять новые лабиринты и улучшать игровой опыт.
            В благодарность мы предлагаем уникальные бонусы для донатеров.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-slate-800 border-${plan.color}-800/50 ${plan.popular ? 'ring-2 ring-amber-500 relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Популярный выбор
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className={`text-${plan.color}-500 text-2xl`}>{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                <div className={`text-${plan.color}-500 text-3xl font-bold mt-2`}>
                  {plan.price}
                  <span className="text-gray-400 text-base font-normal ml-1">/ месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`text-${plan.color}-500 h-5 w-5 mt-0.5 shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={plan.popular ? `bg-amber-500 hover:bg-amber-600 text-black w-full` : `bg-slate-700 hover:bg-amber-500 hover:text-black border border-amber-500/50 text-amber-500 w-full`}
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-slate-800 border border-amber-800/50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-500 mb-4 flex items-center gap-2">
            <Icon name="CreditCard" size={24} />
            Способы оплаты
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-700 p-4 rounded-lg flex justify-center items-center">
              <span className="text-white">Банковские карты</span>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg flex justify-center items-center">
              <span className="text-white">QIWI</span>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg flex justify-center items-center">
              <span className="text-white">WebMoney</span>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg flex justify-center items-center">
              <span className="text-white">Криптовалюты</span>
            </div>
          </div>
          <p className="text-gray-300 text-center">
            По вопросам донатов и возникшим проблемам обращайтесь в Discord или на почту support@rustmaze.ru
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DonatePage;
