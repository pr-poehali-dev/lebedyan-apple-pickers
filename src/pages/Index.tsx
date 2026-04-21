import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c9be10fe-7961-4d57-a102-495939423a26/files/e4f3a627-689e-47ab-80a9-2f803632de0c.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "conditions", label: "Условия" },
  { id: "salary", label: "Оплата" },
  { id: "vacancies", label: "Вакансии" },
  { id: "faq", label: "FAQ" },
  { id: "contacts", label: "Контакты" },
];

const VACANCIES = [
  { id: 1, title: "Сборщик яблок", location: "Сад Троекурово, Лебедянь", salary: "от 3 000 ₽/день", type: "Сезонная", emoji: "🍎", hot: true },
  { id: 2, title: "Сборщик яблок", location: "Сад Агроном, Лебедянь", salary: "от 3 000 ₽/день", type: "Сезонная", emoji: "🍏", hot: true },
  { id: 3, title: "Сортировщик яблок", location: "Сад Троекурово, Лебедянь", salary: "от 2 500 ₽/день", type: "Сезонная", emoji: "📦", hot: false },
  { id: 4, title: "Сортировщик яблок", location: "Сад Агроном, Лебедянь", salary: "от 2 500 ₽/день", type: "Сезонная", emoji: "🧺", hot: false },
  { id: 5, title: "Водитель погрузчика", location: "Сад Троекурово, Лебедянь", salary: "от 4 000 ₽/день", type: "Сезонная", emoji: "🚜", hot: true },
  { id: 6, title: "Бригадир сборщиков", location: "Сад Агроном, Лебедянь", salary: "от 5 000 ₽/день", type: "Сезонная", emoji: "👨‍🌾", hot: true },
];

const FAQ_ITEMS = [
  { q: "Когда начинается сезон сбора яблок?", a: "Сезон стартует в августе и длится до октября. Чем раньше откликнешься — тем больше заработаешь за полный сезон." },
  { q: "Предоставляется ли жильё?", a: "Да, работникам предоставляется бесплатное проживание в общежитии прямо на территории садов Троекурово и Агроном." },
  { q: "Как считается сдельная оплата?", a: "Оплата за каждый собранный ящик. Чем больше ящиков — тем выше заработок. В среднем опытный сборщик собирает 60–80 ящиков в день." },
  { q: "Нужен ли опыт сбора яблок?", a: "Опыт не нужен. Бригадир покажет технику сбора прямо на месте — обучение занимает 30 минут." },
  { q: "Как добраться до садов Лебедяни?", a: "Лебедянь находится в Липецкой области. До города есть прямые автобусы из Москвы, Воронежа, Липецка. От города до садов организован развоз." },
  { q: "Есть ли питание?", a: "Да, горячее питание 3 раза в день входит в условия работы и не вычитается из зарплаты." },
];

const MOCK_CHATS = [
  { id: 1, name: "Сад Троекурово", lastMsg: "Ждём вас в понедельник!", time: "14:23", unread: 2, avatar: "🍎" },
  { id: 2, name: "Сад Агроном", lastMsg: "Документы приняты, выход завтра", time: "11:05", unread: 0, avatar: "🍏" },
  { id: 3, name: "Бригадир Иван", lastMsg: "Добрый день! Вы откликнулись...", time: "Вчера", unread: 1, avatar: "👨‍🌾" },
];

const MOCK_MESSAGES = [
  { id: 1, from: "employer", text: "Добрый день! Вы откликнулись на вакансию сборщика яблок в саду Троекурово.", time: "10:30" },
  { id: 2, from: "me", text: "Здравствуйте! Да, очень интересует. Когда можно выйти?", time: "10:32" },
  { id: 3, from: "employer", text: "Выход с 5 августа. Опыт сбора есть?", time: "10:33" },
  { id: 4, from: "me", text: "Нет, но готов учиться. Жильё предоставляется?", time: "10:35" },
  { id: 5, from: "employer", text: "Да, бесплатное общежитие + питание 3 раза в день. Ждём вас в понедельник!", time: "14:23" },
];

function Navbar({ messengerOpen, setMessengerOpen }: { messengerOpen: boolean; setMessengerOpen: (v: boolean) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-heading text-2xl font-bold" style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WORK</span>
          <span className="font-heading text-2xl font-bold text-white">FORCE</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
              className="px-4 py-2 rounded-lg font-body text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMessengerOpen(!messengerOpen)}
            className="relative p-2 rounded-lg bg-white/5 hover:bg-[#FF5C00]/20 transition-all text-white/70 hover:text-[#FF5C00]"
          >
            <Icon name="MessageCircle" size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5C00] rounded-full text-[10px] font-bold text-white flex items-center justify-center">3</span>
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#FF5C00] text-white rounded-lg font-body font-semibold text-sm hover:bg-orange-600 transition-all">
            <Icon name="Zap" size={16} />
            Найти работу
          </button>
          <button className="md:hidden p-2 text-white/70" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-lg font-body text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </button>
          ))}
          <button className="mt-2 w-full px-4 py-3 bg-[#FF5C00] text-white rounded-lg font-body font-semibold text-sm">Найти работу</button>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Молодые рабочие" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A0A0A 40%, rgba(10,10,10,0.6) 70%, transparent)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0A0A0A 0%, transparent 40%)" }} />
      </div>
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full blur-3xl" style={{ background: "rgba(255,92,0,0.08)" }} />

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(255,92,0,0.12)", border: "1px solid rgba(255,92,0,0.3)" }}>
            <span className="w-2 h-2 bg-[#FF5C00] rounded-full animate-pulse" />
            <span className="font-body text-[#FF5C00] text-sm font-medium">Сезон сбора яблок 2026 — Лебедянь</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl font-bold leading-none mb-6 uppercase">
            <span className="text-white">СБОРЩИКИ</span><br />
            <span style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ЯБЛОК</span><br />
            <span className="text-white">В САДЫ</span><br />
            <span className="text-white/25">ЛЕБЕДЯНИ</span>
          </h1>

          <p className="font-body text-lg text-white/55 mb-10 max-w-lg leading-relaxed">
            Требуются сборщики яблок в сады <strong className="text-white">Троекурово</strong> и <strong className="text-white">Агроном</strong> города Лебедянь. Сдельная оплата, бесплатное жильё и питание.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-3 px-8 py-4 bg-[#FF5C00] text-white rounded-xl font-body font-bold text-base hover:bg-orange-600 transition-all hover:scale-105"
              onClick={() => document.getElementById("vacancies")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="Search" size={20} />
              Смотреть вакансии
            </button>
            <button
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-body font-semibold text-base text-white hover:bg-white/10 transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
              onClick={() => document.getElementById("salary")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="Calculator" size={20} />
              Как считается оплата
            </button>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { num: "2 сада", label: "Троекурово и Агроном" },
              { num: "500+", label: "Мест для работников" },
              { num: "3 000₽", label: "Оплата в день" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl font-bold" style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                <div className="font-body text-sm text-white/35">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#FF5C00] py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(8).fill("СБОРЩИКИ ЯБЛОК · ЛЕБЕДЯНЬ · САД ТРОЕКУРОВО · САД АГРОНОМ · СДЕЛЬНАЯ ОПЛАТА · БЕСПЛАТНОЕ ЖИЛЬЁ И ПИТАНИЕ · ВЫХОД С АВГУСТА · ").map((t, i) => (
            <span key={i} className="font-heading font-bold text-sm text-white/90 uppercase tracking-widest px-4">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionsSection() {
  const conditions = [
    { icon: "UtensilsCrossed", title: "Питание", desc: "Горячее питание 3 раза в день прямо в садах. Завтрак, обед и ужин — бесплатно для всех работников.", badge: "Бесплатно", grad: "rgba(255,92,0,0.12)", bord: "rgba(255,92,0,0.2)" },
    { icon: "BedDouble", title: "Проживание", desc: "Бесплатное общежитие на территории садов Троекурово и Агроном. Горячая вода, душ, Wi-Fi.", badge: "Включено", grad: "rgba(0,194,255,0.1)", bord: "rgba(0,194,255,0.2)" },
    { icon: "Clock", title: "График", desc: "Рабочий день с 7:00 до 18:00 с перерывами. Сезон с августа по октябрь, выход в любой момент.", badge: "Сезон", grad: "rgba(184,255,0,0.1)", bord: "rgba(184,255,0,0.2)" },
    { icon: "MapPin", title: "Два сада", desc: "Работа в двух садах: Троекурово и Агроном. Оба расположены в Лебедяни, организован развоз.", badge: "Лебедянь", grad: "rgba(168,85,247,0.1)", bord: "rgba(168,85,247,0.2)" },
  ];

  return (
    <section id="conditions" className="py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-body text-[#FF5C00] text-sm font-semibold uppercase tracking-widest">Условия работы</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mt-3">
            УСЛОВИЯ<br />
            <span style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>В САДАХ ЛЕБЕДЯНИ</span>
          </h2>
          <p className="font-body text-white/45 mt-4 max-w-lg">Сады Троекурово и Агроном обеспечивают всем необходимым — тебе остаётся только собирать яблоки и зарабатывать.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditions.map((c) => (
            <div key={c.title} className="relative p-6 rounded-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]" style={{ background: c.grad, border: `1px solid ${c.bord}` }}>
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 rounded-full text-[11px] font-body font-medium text-white/60" style={{ background: "rgba(255,255,255,0.08)" }}>{c.badge}</span>
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Icon name={c.icon} fallback="Star" size={24} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2 uppercase">{c.title}</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalarySection() {
  const [days, setDays] = useState(20);
  const [rate, setRate] = useState(3500);

  return (
    <section id="salary" className="py-24 relative overflow-hidden" style={{ background: "#111111" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(255,214,0,0.04)" }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-body text-[#FFD600] text-sm font-semibold uppercase tracking-widest">Сдельная оплата</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mt-3">
            СЧИТАЙ<br />
            <span style={{ background: "linear-gradient(135deg, #B8FF00, #00C2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>СВОЙ ДОХОД</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl" style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)" }}>
              <label className="font-body text-white/55 text-sm mb-3 block">Дней в месяц: <span className="text-white font-semibold">{days}</span></label>
              <input type="range" min={1} max={31} value={days} onChange={e => setDays(Number(e.target.value))} className="w-full accent-orange-500" />
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)" }}>
              <label className="font-body text-white/55 text-sm mb-3 block">Ставка в день: <span className="text-white font-semibold">{rate.toLocaleString()} ₽</span></label>
              <input type="range" min={1500} max={8000} step={100} value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full accent-orange-500" />
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,92,0,0.15), rgba(255,214,0,0.08))", border: "1px solid rgba(255,92,0,0.3)" }}>
              <div className="font-body text-white/55 text-sm mb-1">Твой доход в месяц</div>
              <div className="font-heading text-5xl font-bold" style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {(days * rate).toLocaleString()} ₽
              </div>
              <div className="mt-3 font-body text-white/35 text-xs">{days} дней × {rate.toLocaleString()} ₽/день</div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { title: "Оплата за ящик", desc: "Каждый собранный ящик яблок фиксируется и оплачивается. Больше ящиков — больше денег.", icon: "Wallet" },
              { title: "Ежедневный расчёт", desc: "Деньги выплачиваются каждый день после смены. Никаких задержек — всё прозрачно.", icon: "BarChart3" },
              { title: "Бонусы за объём", desc: "Выполнил дневной план — получи надбавку. Лучшие сборщики зарабатывают до 5 000 ₽/день.", icon: "TrendingUp" },
              { title: "Жильё и еда — бесплатно", desc: "Проживание и питание предоставляются бесплатно и не вычитаются из зарплаты.", icon: "BadgeCheck" },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl transition-all" style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,92,0,0.12)" }}>
                  <Icon name={item.icon} fallback="Star" size={18} className="text-[#FF5C00]" />
                </div>
                <div>
                  <div className="font-body font-semibold text-white text-sm">{item.title}</div>
                  <div className="font-body text-white/40 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VacanciesSection() {
  const [filter, setFilter] = useState("Все");
  const types = ["Все", "Сезонная"];
  const filtered = filter === "Все" ? VACANCIES : VACANCIES.filter(v => v.type === filter);

  return (
    <section id="vacancies" className="py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <span className="font-body text-[#B8FF00] text-sm font-semibold uppercase tracking-widest">Вакансии</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mt-3">
            ВАКАНСИИ<br />
            <span style={{ background: "linear-gradient(135deg, #B8FF00, #00C2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>САДОВ ЛЕБЕДЯНИ</span>
          </h2>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="px-4 py-2 rounded-full font-body text-sm font-medium transition-all"
              style={filter === t
                ? { background: "#B8FF00", color: "#0A0A0A" }
                : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(v => (
            <div
              key={v.id}
              className="group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {v.hot && (
                <div className="absolute -top-3 right-4 flex items-center gap-1 px-3 py-1 bg-[#FF5C00] rounded-full">
                  <span className="text-xs">🔥</span>
                  <span className="font-body text-xs font-bold text-white">Горячая</span>
                </div>
              )}
              <div className="text-3xl mb-4">{v.emoji}</div>
              <h3 className="font-heading text-xl font-bold text-white uppercase mb-1">{v.title}</h3>
              <div className="flex items-center gap-1.5 mb-4">
                <Icon name="MapPin" size={14} className="text-white/35" />
                <span className="font-body text-sm text-white/35">{v.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading text-xl font-bold" style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v.salary}</div>
                  <div className="font-body text-xs text-white/25 mt-0.5">{v.type}</div>
                </div>
                <button className="px-4 py-2 rounded-lg font-body text-sm font-medium text-white/65 hover:bg-[#FF5C00] hover:text-white transition-all" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  Откликнуться
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-8 py-4 rounded-xl font-body font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-all" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
            Показать все вакансии
          </button>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-body text-[#00C2FF] text-sm font-semibold uppercase tracking-widest">Вопросы и ответы</span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mt-3">
              ЧАСТО<br /><span className="text-white/25">СПРАШИВАЮТ</span>
            </h2>
            <p className="font-body text-white/45 mt-6 leading-relaxed">
              Не нашёл ответ — напиши нам или позвони. Отвечаем в течение 15 минут.
            </p>
            <button
              className="mt-8 flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-[#00C2FF] hover:opacity-80 transition-all"
              style={{ background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.25)" }}
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="MessageSquare" size={18} />
              Написать нам
            </button>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-all"
                >
                  <span className="font-body font-semibold text-white pr-4">{item.q}</span>
                  <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-white/35 flex-shrink-0" />
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="font-body text-white/50 text-sm leading-relaxed border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-24 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl" style={{ background: "rgba(255,92,0,0.06)" }} />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="font-body text-[#FF5C00] text-sm font-semibold uppercase tracking-widest">Контакты</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase mt-3">
            СВЯЖИСЬ<br />
            <span style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>С НАМИ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", sub: "Бесплатно по России", color: "#FF5C00", bg: "rgba(255,92,0,0.08)", bord: "rgba(255,92,0,0.2)" },
            { icon: "Mail", label: "Email", value: "sad@lebedyan.ru", sub: "Отвечаем за 15 минут", color: "#FFD600", bg: "rgba(255,214,0,0.08)", bord: "rgba(255,214,0,0.2)" },
            { icon: "MapPin", label: "Адрес", value: "Лебедянь, Липецкая обл.", sub: "Сады Троекурово и Агроном", color: "#00C2FF", bg: "rgba(0,194,255,0.08)", bord: "rgba(0,194,255,0.2)" },
          ].map(c => (
            <div key={c.label} className="p-6 rounded-2xl text-center" style={{ background: c.bg, border: `1px solid ${c.bord}` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(255,255,255,0.06)" }}>
                <Icon name={c.icon} fallback="Star" size={22} style={{ color: c.color }} />
              </div>
              <div className="font-body text-white/35 text-sm mb-1">{c.label}</div>
              <div className="font-heading text-lg font-bold" style={{ color: c.color }}>{c.value}</div>
              <div className="font-body text-white/25 text-xs mt-1">{c.sub}</div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-8 rounded-2xl" style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="font-heading text-2xl font-bold text-white uppercase mb-6">Оставить заявку</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input placeholder="Имя" className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/25 focus:outline-none transition-all" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }} />
            <input placeholder="Телефон" className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/25 focus:outline-none transition-all" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }} />
          </div>
          <textarea placeholder="Что интересует?" rows={3} className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/25 focus:outline-none transition-all resize-none mb-4" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }} />
          <button className="w-full py-4 bg-[#FF5C00] text-white rounded-xl font-body font-bold hover:bg-orange-600 transition-all hover:scale-[1.01]">
            Отправить заявку
          </button>
        </div>
      </div>
    </section>
  );
}

function MessengerPanel({ onClose }: { onClose: () => void }) {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(MOCK_MESSAGES);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), from: "me", text: message, time: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }) }]);
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 right-4 w-[380px] h-[540px] rounded-t-2xl shadow-2xl z-50 flex flex-col overflow-hidden" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ background: "#1A1A1A", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2">
          <Icon name="MessageCircle" size={18} className="text-[#FF5C00]" />
          <span className="font-heading font-bold text-white text-sm uppercase tracking-wide">Мессенджер</span>
        </div>
        <button onClick={onClose} className="p-1 text-white/35 hover:text-white transition-colors">
          <Icon name="X" size={16} />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-[130px] overflow-y-auto flex-shrink-0" style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          {MOCK_CHATS.map(chat => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className="w-full p-3 text-left transition-all"
              style={{ background: activeChat === chat.id ? "rgba(255,92,0,0.1)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="text-xl mb-1">{chat.avatar}</div>
              <div className="font-body text-xs font-medium leading-tight truncate" style={{ color: activeChat === chat.id ? "#FF5C00" : "rgba(255,255,255,0.65)" }}>
                {chat.name}
              </div>
              {chat.unread > 0 && (
                <span className="inline-flex items-center justify-center mt-1 w-4 h-4 bg-[#FF5C00] rounded-full text-[9px] font-bold text-white">{chat.unread}</span>
              )}
              <div className="font-body text-[10px] text-white/20 mt-0.5">{chat.time}</div>
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[80%] px-3 py-2 rounded-xl font-body text-xs leading-relaxed" style={
                  msg.from === "me"
                    ? { background: "#FF5C00", color: "white", borderBottomRightRadius: 4 }
                    : { background: "#222222", color: "rgba(255,255,255,0.75)", borderBottomLeftRadius: 4 }
                }>
                  <p>{msg.text}</p>
                  <div className="text-[10px] mt-1 opacity-60 text-right">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Написать..."
              className="flex-1 px-3 py-2 rounded-lg font-body text-xs text-white placeholder-white/25 focus:outline-none transition-all"
              style={{ background: "#222222", border: "1px solid rgba(255,255,255,0.08)" }}
            />
            <button onClick={sendMessage} className="w-8 h-8 bg-[#FF5C00] rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all flex-shrink-0">
              <Icon name="Send" size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10" style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="font-heading text-xl font-bold" style={{ background: "linear-gradient(135deg, #FF5C00, #FFD600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WORK</span>
            <span className="font-heading text-xl font-bold text-white">FORCE</span>
          </div>
          <p className="font-body text-white/25 text-xs">Сады Троекурово и Агроном · г. Лебедянь</p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })} className="font-body text-sm text-white/35 hover:text-white transition-colors">
              {item.label}
            </button>
          ))}
        </div>
        <p className="font-body text-xs text-white/15">© 2024 WorkForce</p>
      </div>
    </footer>
  );
}

export default function Index() {
  const [messengerOpen, setMessengerOpen] = useState(false);

  return (
    <div className="min-h-screen font-body" style={{ background: "#0A0A0A" }}>
      <Navbar messengerOpen={messengerOpen} setMessengerOpen={setMessengerOpen} />
      <HeroSection />
      <ConditionsSection />
      <SalarySection />
      <VacanciesSection />
      <FaqSection />
      <ContactsSection />
      <Footer />
      {messengerOpen && <MessengerPanel onClose={() => setMessengerOpen(false)} />}
    </div>
  );
}