
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const RulesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171614] to-[#2D2A26]">
      <NavBar />
      
      <div className="pt-24 pb-16 px-4 container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">Правила сервера</h1>
          <p className="text-gray-300">Соблюдение этих правил обязательно для всех игроков. Нарушение может привести к временному или постоянному бану.</p>
        </div>
        
        <Card className="bg-slate-800 border-amber-800/50 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4 text-amber-500">
              <Icon name="AlertTriangle" size={24} />
              <h2 className="text-xl font-semibold">Важно!</h2>
            </div>
            <p className="text-gray-300">
              Незнание правил не освобождает от ответственности. Администрация оставляет за собой право менять правила без предварительного уведомления. Рекомендуем регулярно проверять эту страницу.
            </p>
          </CardContent>
        </Card>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-slate-800 border-amber-800/50 rounded-lg overflow-hidden px-6">
            <AccordionTrigger className="py-4 text-amber-500 hover:text-amber-400 hover:no-underline">
              <div className="flex items-center gap-3">
                <Icon name="Users" size={20} />
                <span className="text-lg font-medium">Общие правила поведения</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pb-6">
              <ul className="space-y-2 list-disc pl-6">
                <li>Уважительно относитесь к другим игрокам и администрации</li>
                <li>Запрещено использование оскорблений, мата и дискриминационных высказываний</li>
                <li>Запрещена реклама посторонних проектов и сервисов</li>
                <li>Запрещены политические и религиозные споры</li>
                <li>Не спамьте в чате и не злоупотребляйте капсом</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-slate-800 border-amber-800/50 rounded-lg overflow-hidden px-6">
            <AccordionTrigger className="py-4 text-amber-500 hover:text-amber-400 hover:no-underline">
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={20} />
                <span className="text-lg font-medium">Запрещенные действия в игре</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pb-6">
              <ul className="space-y-2 list-disc pl-6">
                <li>Использование читов, макросов и любых сторонних программ для получения преимущества</li>
                <li>Эксплуатация багов и глитчей игры</li>
                <li>Гриферство и умышленное вредительство другим игрокам</li>
                <li>Продажа или обмен внутриигровых предметов за реальные деньги</li>
                <li>Угрозы DDoS-атак или других вредоносных действий</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-slate-800 border-amber-800/50 rounded-lg overflow-hidden px-6">
            <AccordionTrigger className="py-4 text-amber-500 hover:text-amber-400 hover:no-underline">
              <div className="flex items-center gap-3">
                <Icon name="Compass" size={20} />
                <span className="text-lg font-medium">Правила лабиринтов</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pb-6">
              <ul className="space-y-2 list-disc pl-6">
                <li>Не блокируйте проходы и не мешайте другим игрокам проходить лабиринт</li>
                <li>Запрещено умышленно ломать механизмы лабиринта</li>
                <li>PvP разрешен только в специально отмеченных зонах</li>
                <li>Не передавайте ответы на загадки лабиринта другим игрокам</li>
                <li>Запрещено использовать баги для прохождения ловушек</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <Footer />
    </div>
  );
};

export default RulesPage;
