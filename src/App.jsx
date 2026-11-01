import React, { useState, useEffect } from 'react';

export default function App() {
  const [visitorCount, setVisitorCount] = useState(1337);
  const baseUrl = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    // Visitor counter
    const stored = localStorage.getItem('suarare_hits');
    const count = stored ? parseInt(stored, 10) + 1 : 1337;
    setVisitorCount(count);
    localStorage.setItem('suarare_hits', count.toString());
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#ff6600] font-serif-sua selection:bg-orange-600 selection:text-black w-full overflow-x-hidden">
      
      {/* 1. TOP STATIC ANNOUNCEMENT BAR (HALLOWEEN ORANGE) */}
      <div className="w-full bg-[#ff6600] text-black text-center py-2 px-3 text-xs sm:text-sm md:text-base font-bold tracking-wider sm:tracking-widest uppercase select-none border-b-2 border-black leading-snug">
        🎃 31 ОКТЯБРЯ ПРОШЛО — НАМ ИСПОЛНИЛСЯ 1 ГОД! † HALLOWEEN UPDATE † НАШ ТЕЛЕГРАМ: T.ME/SUARARE 🎃
      </div>

      {/* 2. SITE CONTAINER (RESPONSIVE & DESKTOP ZOOMED) */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 zoom-desktop w-full">
        
        {/* TOP BRANDING & NAVIGATION */}
        <header className="text-center mb-4 sm:mb-5">
          
          {/* Top Jagg Cutouts Ribbon */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2">
            <img 
              src={`${baseUrl}real_pixel_skull.png`} 
              alt="Pixel Skull" 
              className="w-8 h-8 sm:w-10 sm:h-10 pixel-art" 
            />
            <img 
              src={`${baseUrl}real_pixel_pumpkin.png`} 
              alt="Pixel Pumpkin" 
              className="w-10 h-10 sm:w-12 sm:h-12 pixel-art" 
            />
            <img 
              src={`${baseUrl}real_pixel_candy_corn.png`} 
              alt="Pixel Candy Corn" 
              className="w-8 h-8 sm:w-10 sm:h-10 pixel-art" 
            />
          </div>

          <div className="font-gothic text-6xl sm:text-8xl md:text-9xl text-[#ff6600] tracking-wider mb-1 leading-none break-words">
            SUARARE
          </div>
          
          <div className="text-xs sm:text-sm md:text-base text-white tracking-[0.2em] sm:tracking-[0.35em] uppercase mb-1 font-bold">
            † ОЧИЩЕНИЕ ТЕЛЕГРАМА ОТ МУСОРА †
          </div>

          <div className="text-[11px] sm:text-xs text-orange-400 tracking-[0.25em] uppercase mb-3 sm:mb-4 font-bold">
            [ HAUNT-O-HOLIXXX HALLOWEEN SPECIAL EDITION ]
          </div>

          {/* Retro nav menu with square brackets */}
          <nav className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider border-y-2 border-[#ff6600] py-2">
            <a href="#about" className="hover:text-black hover:bg-[#ff6600] px-1.5 py-0.5">[ О ПРОЕКТЕ ]</a>
            <a href="#anniversary" className="hover:text-black hover:bg-[#ff6600] px-1.5 py-0.5 text-white bg-orange-950/70 border border-orange-600">[ НАМ 1 ГОД! 🎃 ]</a>
            <a href="#creators" className="hover:text-black hover:bg-[#ff6600] px-1.5 py-0.5">[ СОЗДАТЕЛИ ]</a>
            <a href="#castes" className="hover:text-black hover:bg-[#ff6600] px-1.5 py-0.5">[ КАСТЫ ]</a>
            <a href="#services" className="hover:text-black hover:bg-[#ff6600] px-1.5 py-0.5">[ УСЛУГИ ]</a>
            <a href="https://t.me/suarare" target="_blank" rel="noreferrer" className="hover:text-black hover:bg-[#ff6600] px-1.5 py-0.5">[ TELEGRAM ]</a>
          </nav>
        </header>

        {/* HERO SECTION / BLOODY KNIFE LOGO WITH HALLOWEEN PIXEL ACCENTS */}
        <div id="about" className="retro-box-thick p-4 sm:p-6 md:p-7 text-center mb-3 sm:mb-4 bg-black">
          
          {/* Centered Bloody Knife Logo flanked with pixel Halloween candies */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-5">
            <img 
              src={`${baseUrl}real_pixel_candy_corn.png`} 
              alt="Candy Corn" 
              className="w-10 h-10 sm:w-14 sm:h-14 pixel-art hidden sm:block transform -rotate-12" 
            />
            
            <div className="w-32 h-32 sm:w-44 sm:h-44 border-2 border-[#ff6600] p-1 bg-black shrink-0 relative">
              <img 
                src={`${baseUrl}channel_avatar.jpg`} 
                alt="SuaRare Logo" 
                className="w-full h-full object-cover block"
              />
              <img 
                src={`${baseUrl}real_pixel_pumpkin.png`} 
                alt="" 
                className="absolute -top-3.5 -right-3.5 w-8 h-8 pixel-art select-none" 
              />
            </div>

            <img 
              src={`${baseUrl}real_pixel_candy_wrap.png`} 
              alt="Candy Wrap" 
              className="w-10 h-10 sm:w-14 sm:h-14 pixel-art hidden sm:block transform rotate-12" 
            />
          </div>

          <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold uppercase tracking-wider mb-2.5 sm:mb-3 leading-tight">
            МЫ ОЧИЩАЕМ ТЕЛЕГРАМ ОТ МУСОРА
          </h1>

          <div className="text-sm sm:text-base md:text-lg text-[#ff6600] leading-relaxed max-w-xl mx-auto space-y-2 mb-4 sm:mb-5 px-1">
            <p>
              Категорически приветствуем вас в канале <span className="text-white underline">SuaRare</span>.
            </p>
            <p className="text-zinc-300 text-xs sm:text-sm md:text-base">
              Мы занимаемся рейдами различных мусорных групп, скам-сообществ и токсичных сеток в Telegram.
              Ликвидация паразитов, очистка чатов и возвращение порядка.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 text-sm md:text-base">
            <a
              href="https://t.me/suarare"
              target="_blank"
              rel="noreferrer"
              className="sua-btn w-full sm:w-auto"
            >
              ➔ НАШ КАНАЛ (T.ME/SUARARE)
            </a>
            <a
              href="https://t.me/SuaRare_bot"
              target="_blank"
              rel="noreferrer"
              className="sua-btn-white w-full sm:w-auto"
            >
              ➔ ВСТУПИТЬ ЧЕРЕЗ БОТА (@SuaRare_bot)
            </a>
          </div>

        </div>

        {/* 1 YEAR ANNIVERSARY CELEBRATION (NO TIMER - BIRTHDAY HAS PASSED!) */}
        <div id="anniversary" className="retro-box-thick p-4 sm:p-6 md:p-7 text-center mb-3 sm:mb-4 bg-black relative">
          
          {/* Header with real jagg skull & pumpkin */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <img 
              src={`${baseUrl}real_pixel_skull.png`} 
              alt="Skull" 
              className="w-8 h-8 sm:w-10 sm:h-10 pixel-art" 
            />
            <span className="text-xs sm:text-sm text-white uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold">
              † 31 ОКТЯБРЯ СОСТОЯЛОСЬ // ГОДОВЩИНА В АДУ †
            </span>
            <img 
              src={`${baseUrl}real_pixel_pumpkin.png`} 
              alt="Pumpkin" 
              className="w-8 h-8 sm:w-10 sm:h-10 pixel-art" 
            />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#ff6600] font-bold uppercase tracking-wide mb-2 leading-tight">
            ПРОЕКТУ SUARARE ИСПОЛНИЛСЯ 1 ГОД!
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl mx-auto mb-4 leading-relaxed">
            31 октября наш первый день рождения успешно отгремел! Проект был основан <span className="text-white font-bold">31 октября 2025 года</span>.
            Позади целый год непрерывной зачистки мессенджера от скамеров, спам-ботов и токсичного мусора.
          </p>

          {/* Real Anniversary Box without fabricated stats */}
          <div className="border-2 border-[#ff6600] p-4 sm:p-5 bg-black max-w-2xl mx-auto mb-4">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
              <img src={`${baseUrl}real_pixel_candy_corn.png`} alt="" className="w-7 h-7 sm:w-9 sm:h-9 pixel-art" />
              <div className="text-xs sm:text-sm text-orange-400 uppercase tracking-widest font-bold">
                ★ ГОД ОЧИСТКИ ТЕЛЕГРАМА ★
              </div>
              <img src={`${baseUrl}real_pixel_candy_wrap.png`} alt="" className="w-7 h-7 sm:w-9 sm:h-9 pixel-art" />
            </div>

            <p className="text-xs sm:text-sm md:text-base text-white font-bold leading-relaxed mb-3">
              Никаких фальшивых отчетов и накрученных цифр. Мы просто делаем свое дело: 
              уничтожаем скам-сетки, зачищаем чаты и возвращаем нормальный порядок в Telegram.
            </p>

            <div className="inline-block border border-[#ff6600] px-3 py-1 text-[11px] sm:text-xs text-[#ff6600] font-bold tracking-wider uppercase bg-orange-950/40">
              † 31.10.2025 ➔ 2026 // SUARARE FOREVER †
            </div>
          </div>

          {/* Real cutouts & slogan footer */}
          <div className="flex items-center justify-center gap-3 mt-3 text-xs sm:text-sm md:text-base text-[#ff6600] tracking-widest uppercase font-bold">
            <img 
              src={`${baseUrl}real_pixel_pumpkin_pail.png`} 
              alt="Pail" 
              className="w-7 h-7 sm:w-8 sm:h-8 pixel-art" 
            />
            <span>† RIP SCAM // ЧИСТЫЙ ТЕЛЕГРАМ †</span>
            <img 
              src={`${baseUrl}real_pixel_pumpkin_pail.png`} 
              alt="Pail" 
              className="w-7 h-7 sm:w-8 sm:h-8 pixel-art" 
            />
          </div>

        </div>

        {/* CREATORS SECTION / OELIP & SPVOV */}
        <div id="creators" className="retro-box-thick p-4 sm:p-6 md:p-7 mb-3 sm:mb-4 bg-black">
          <div className="text-center mb-4 sm:mb-5">
            <div className="flex items-center justify-center gap-2">
              <img src={`${baseUrl}real_pixel_skull.png`} alt="Skull" className="w-5 h-5 sm:w-6 sm:h-6 pixel-art" />
              <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-[0.2em] font-bold">ADMINISTRATION</span>
              <img src={`${baseUrl}real_pixel_skull.png`} alt="Skull" className="w-5 h-5 sm:w-6 sm:h-6 pixel-art" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#ff6600] font-bold uppercase tracking-wide leading-tight">
              СОЗДАТЕЛИ SUARARE
            </h2>
            <div className="text-xs sm:text-sm md:text-base text-zinc-300 mt-1">
              По всем вопросам писать <span className="text-white font-bold">@spvov</span> / <span className="text-white font-bold">@oelip</span> или директ канала
            </div>
          </div>

          {/* 2 Creators cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            
            {/* OELIP */}
            <div className="border-2 border-[#ff6600] p-3.5 sm:p-4 bg-black flex flex-col justify-between">
              <div>
                <div className="text-xs sm:text-sm text-zinc-400 uppercase tracking-widest mb-2 border-b border-orange-950 pb-1 flex justify-between font-bold">
                  <span className="flex items-center gap-1.5">
                    <img src={`${baseUrl}real_pixel_pumpkin.png`} alt="" className="w-4 h-4 pixel-art inline" />
                    FOUNDER
                  </span>
                  <span className="text-white">@oelip</span>
                </div>

                {/* Original oelip.jpg */}
                <div className="border-2 border-[#ff6600] p-1 bg-black my-2">
                  <img 
                    src={`${baseUrl}oelip.jpg`} 
                    alt="OELIP" 
                    className="w-full h-auto max-h-24 sm:max-h-28 object-contain block mx-auto"
                  />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed my-2">
                  Основатель проекта SuaRare. Стратегия рейдов и вердикт над мусорными группами.
                </p>
              </div>

              <a
                href="https://t.me/oelip"
                target="_blank"
                rel="noreferrer"
                className="sua-btn w-full mt-2 text-center"
              >
                ➔ НАПИСАТЬ @OELIP
              </a>
            </div>

            {/* SPVOV */}
            <div className="border-2 border-[#ff6600] p-3.5 sm:p-4 bg-black flex flex-col justify-between">
              <div>
                <div className="text-xs sm:text-sm text-zinc-400 uppercase tracking-widest mb-2 border-b border-orange-950 pb-1 flex justify-between font-bold">
                  <span className="flex items-center gap-1.5">
                    <img src={`${baseUrl}real_pixel_pumpkin.png`} alt="" className="w-4 h-4 pixel-art inline" />
                    FOUNDER
                  </span>
                  <span className="text-white">@spvov</span>
                </div>

                {/* Original spvov.jpg */}
                <div className="border-2 border-[#ff6600] p-1 bg-black my-2">
                  <img 
                    src={`${baseUrl}spvov.jpg`} 
                    alt="SPVOV" 
                    className="w-full h-auto max-h-24 sm:max-h-28 object-contain block mx-auto"
                  />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed my-2">
                  Сооснователь проекта SuaRare. Прием жалоб, разведка целей, координация рейдов.
                </p>
              </div>

              <a
                href="https://t.me/spvov"
                target="_blank"
                rel="noreferrer"
                className="sua-btn w-full mt-2 text-center"
              >
                ➔ НАПИСАТЬ @SPVOV
              </a>
            </div>

          </div>
        </div>

        {/* CASTES SECTION */}
        <div id="castes" className="retro-box-thick p-4 sm:p-6 md:p-7 mb-3 sm:mb-4 bg-black">
          <div className="text-center mb-4 sm:mb-5">
            <div className="flex items-center justify-center gap-2">
              <img src={`${baseUrl}real_pixel_skull.png`} alt="Skull" className="w-5 h-5 sm:w-6 sm:h-6 pixel-art" />
              <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-[0.2em] font-bold">RECRUITMENT</span>
              <img src={`${baseUrl}real_pixel_skull.png`} alt="Skull" className="w-5 h-5 sm:w-6 sm:h-6 pixel-art" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#ff6600] font-bold uppercase tracking-wide leading-tight">
              КАСТЫ ОТРЯДА
            </h2>
            <div className="text-xs sm:text-sm md:text-base text-zinc-300 mt-1">
              Если вы хотите вступить к нам — вам в <a href="https://t.me/SuaRare_bot" target="_blank" rel="noreferrer" className="text-white underline font-bold">@SuaRare_bot</a> !
            </div>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            
            <div className="border-2 border-[#ff6600] p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-black">
              <div>
                <div className="text-base sm:text-lg text-white font-bold tracking-wider flex items-center gap-2">
                  <span>† ОСИНТ</span> 
                  <span className="text-[#ff6600] text-sm sm:text-base">(ᴏᴄинᴛ)</span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Сбор информации, деанон мошенников, поиск скрытых чатов и администраторов скама.
                </div>
              </div>
              <span className="text-xs sm:text-sm border-2 border-[#ff6600] px-2.5 py-0.5 sm:py-1 text-[#ff6600] font-bold self-start sm:self-center shrink-0">
                ИНТЕЛЛЕКТ
              </span>
            </div>

            <div className="border-2 border-[#ff6600] p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-black">
              <div>
                <div className="text-base sm:text-lg text-white font-bold tracking-wider flex items-center gap-2">
                  <span>† ТРОЛЛЬ</span> 
                  <span className="text-[#ff6600] text-sm sm:text-base">(ᴛᴩᴏᴧᴧь)</span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Психологическое давление на участников мусорных групп, дестабилизация токсиков.
                </div>
              </div>
              <span className="text-xs sm:text-sm border-2 border-[#ff6600] px-2.5 py-0.5 sm:py-1 text-[#ff6600] font-bold self-start sm:self-center shrink-0">
                ПРЕССИНГ
              </span>
            </div>

            <div className="border-2 border-[#ff6600] p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-black">
              <div>
                <div className="text-base sm:text-lg text-white font-bold tracking-wider flex items-center gap-2">
                  <span>† РЕЙДЕР</span> 
                  <span className="text-[#ff6600] text-sm sm:text-base">(ᴩᴇйдᴇᴩ)</span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Штурмовые рейды, спам-атаки, запуск боевого софта и полная зачистка чатов.
                </div>
              </div>
              <span className="text-xs sm:text-sm border-2 border-[#ff6600] px-2.5 py-0.5 sm:py-1 text-[#ff6600] font-bold self-start sm:self-center shrink-0">
                УДАРНАЯ СИЛА
              </span>
            </div>

          </div>

          <div className="text-center mt-4 sm:mt-5">
            <a
              href="https://t.me/SuaRare_bot"
              target="_blank"
              rel="noreferrer"
              className="sua-btn-white w-full sm:w-auto text-sm sm:text-base"
            >
              ➔ ПОДАТЬ ЗАЯВКУ В @SUARARE_BOT
            </a>
          </div>
        </div>

        {/* SERVICES AND PRICING (СО ЗВЕЗДОЧКАМИ ⭐ И ХЭЛЛОУИН КОНФЕТАМИ) */}
        <div id="services" className="retro-box-thick p-4 sm:p-6 md:p-7 mb-3 sm:mb-4 bg-black">
          <div className="text-center mb-4 sm:mb-5">
            <div className="flex items-center justify-center gap-2">
              <img src={`${baseUrl}real_pixel_candy_wrap.png`} alt="Candy" className="w-5 h-5 sm:w-6 sm:h-6 pixel-art" />
              <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-[0.2em] font-bold">PRICING LIST</span>
              <img src={`${baseUrl}real_pixel_candy_wrap.png`} alt="Candy" className="w-5 h-5 sm:w-6 sm:h-6 pixel-art" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#ff6600] font-bold uppercase tracking-wide leading-tight">
              УСЛУГИ КОМАНДЫ
            </h2>
            <div className="text-xs sm:text-sm md:text-base text-zinc-300 mt-1">
              Наша команда так же предоставляет различные услуги:
            </div>
          </div>

          {/* Brutalist services table with stars */}
          <div className="border-2 border-[#ff6600] divide-y-2 divide-[#ff6600] text-xs sm:text-sm md:text-base">
            
            <div className="p-3 sm:p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 bg-black">
              <div className="flex items-center gap-2">
                <img src={`${baseUrl}real_pixel_candy_corn.png`} alt="" className="w-4 h-4 pixel-art" />
                <span className="text-white font-bold">Спам без публикации в тгк</span>
              </div>
              <span className="text-[#ff6600] font-bold uppercase border-2 border-[#ff6600] px-2.5 py-0.5 text-xs sm:text-sm self-start sm:self-center shrink-0">
                БЕСПЛАТНО
              </span>
            </div>

            <div className="p-3 sm:p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 bg-black">
              <div className="flex items-center gap-2">
                <img src={`${baseUrl}real_pixel_candy_wrap.png`} alt="" className="w-4 h-4 pixel-art" />
                <span className="text-white font-bold">Спам с публикацией в тгк</span>
              </div>
              <span className="text-yellow-400 font-bold border-2 border-yellow-600 px-2.5 py-0.5 text-xs sm:text-sm self-start sm:self-center shrink-0 bg-yellow-950/20">
                15 ⭐
              </span>
            </div>

            <div className="p-3 sm:p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 bg-black">
              <div className="flex items-center gap-2">
                <img src={`${baseUrl}real_pixel_candy_corn.png`} alt="" className="w-4 h-4 pixel-art" />
                <span className="text-white font-bold">Троллинг со спамом</span>
              </div>
              <span className="text-yellow-400 font-bold border-2 border-yellow-600 px-2.5 py-0.5 text-xs sm:text-sm self-start sm:self-center shrink-0 bg-yellow-950/20">
                25 ⭐
              </span>
            </div>

            <div className="p-3 sm:p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 bg-black">
              <div className="flex items-center gap-2">
                <img src={`${baseUrl}real_pixel_candy_wrap.png`} alt="" className="w-4 h-4 pixel-art" />
                <span className="text-white font-bold">Спам в лс цели</span>
              </div>
              <span className="text-yellow-400 font-bold border-2 border-yellow-600 px-2.5 py-0.5 text-xs sm:text-sm self-start sm:self-center shrink-0 bg-yellow-950/20">
                50 ⭐
              </span>
            </div>

            <div className="p-3 sm:p-3.5 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 bg-black">
              <div className="flex items-center gap-2">
                <img src={`${baseUrl}real_pixel_pumpkin.png`} alt="" className="w-4 h-4 pixel-art" />
                <span className="text-white font-bold">Рейд с ботом который удаляет всех участников группы</span>
              </div>
              <span className="text-yellow-400 font-bold border-2 border-yellow-600 px-2.5 py-0.5 text-xs sm:text-sm self-start sm:self-center shrink-0 bg-yellow-950/20">
                100 ⭐
              </span>
            </div>

          </div>

          <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 border border-orange-900 text-xs sm:text-sm text-zinc-300 text-center space-y-1">
            <p>
              Жалобы на группы писать <a href="https://t.me/spvov" target="_blank" rel="noreferrer" className="text-white underline font-bold">@spvov</a> / <a href="https://t.me/oelip" target="_blank" rel="noreferrer" className="text-white underline font-bold">@oelip</a> или директ канала.
            </p>
            <p>
              Наш медиа-архив с записями рейдов: <a href="https://t.me/suarare" target="_blank" rel="noreferrer" className="text-[#ff6600] underline font-bold">клик</a>
            </p>
          </div>

        </div>

        {/* VINTAGE HIT COUNTER & SYSTEM FOOTER */}
        <div className="border-2 border-[#ff6600] p-4 sm:p-5 text-center text-xs sm:text-sm space-y-2 bg-black">
          
          <div className="inline-block border-2 border-[#ff6600] px-3.5 py-1 text-xs sm:text-sm md:text-base tracking-widest text-[#ff6600] font-bold">
            🎃 YOU ARE VISITOR # <span className="text-white">{String(visitorCount).padStart(6, '0')}</span> 🎃
          </div>

          <div className="text-zinc-500 text-[10px] sm:text-xs tracking-wider uppercase">
            BEST VIEWED WITH NETSCAPE / 800x600 • PURE BLACK & HALLOWEEN ORANGE
          </div>

          <div className="text-zinc-400 text-xs sm:text-sm">
            © 2025-2026 SUARARE.T.ME // ALL RIGHTS RESERVED. PURGING TELEGRAM SINCE OCT 31, 2025.
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold pt-1">
            <a href="https://t.me/suarare" target="_blank" rel="noreferrer">[ ТГ КАНАЛ ]</a>
            <a href="https://t.me/SuaRare_bot" target="_blank" rel="noreferrer">[ БОТ ]</a>
            <a href="https://t.me/oelip" target="_blank" rel="noreferrer">[ OELIP ]</a>
            <a href="https://t.me/spvov" target="_blank" rel="noreferrer">[ SPVOV ]</a>
          </div>

        </div>

      </div>

      {/* STATIC BOTTOM BORDER (HALLOWEEN ORANGE) */}
      <div className="w-full bg-[#ff6600] h-1.5 sm:h-2 border-t-2 border-black" />

    </div>
  );
}
