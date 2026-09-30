"use client";

export default function Footer(){
 return <footer className="border-t border-white/10 bg-black">
  <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
   <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
    <div>
     <div className="text-2xl font-black">JACOB<span className="text-[#F76303]">.</span></div>
     <p className="mt-2 text-sm text-white/35">Websites & Digital para pequenos negócios.</p>
    </div>
    <a href="https://www.instagram.com/dev.jacobxz/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white/55 hover:text-[#F76303]">@dev.jacobxz</a>
   </div>
   <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:grid-cols-2">
    <div>
     <p>Ribeirão Preto — SP, Brasil</p>
     <p className="mt-2">Atendimento: <a href="https://wa.me/5516992445413?text=Oi%2C%20vi%20seu%20site%20e%20quero%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" className="text-white/50 transition hover:text-[#F76303]">(55 16) 99244-5413</a></p><p className="mt-2">E-mail: <span className="text-white/50">davi.jacob.drio06@gmail.com</span></p>
    </div>
    <div className="flex gap-5 sm:justify-end">
     <a href="/privacidade" className="hover:text-white">Política de Privacidade</a>
     <a href="/termos" className="hover:text-white">Termos</a>
    </div>
   </div>
   <p className="mt-7 text-xs text-white/20">© {new Date().getFullYear()} JACOB. Websites & Digital.</p>
  </div>
 </footer>;
}
