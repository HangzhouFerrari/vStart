// ══════════════════════════════════════════
//   WALLPAPERS
// ══════════════════════════════════════════
const WPS=[

  // ── Collecties ──
  {id:'col_velios', cat:'Collecties', label:'Velios 3.0',      image:'assets/wallpapers/col_velios.png'},
  {id:'col_velios_dark', cat:'Collecties', label:'Velios 3.0 Donker',      image:'assets/wallpapers/col_velios_dark.png'},

  // ── Natuur ──
  {id:'col_mountains', cat:'Natuur', label:'Bergen',      image:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop'},
  {id:'col_forest',    cat:'Natuur', label:'Bos',         image:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop'},
  {id:'col_ocean',     cat:'Natuur', label:'Oceaan',      image:'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=1080&fit=crop'},
  {id:'col_sunset',    cat:'Natuur', label:'Zonsondergang', image:'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1920&h=1080&fit=crop'},
  {id:'col_stars',     cat:'Natuur', label:'Sterrenhemel', image:'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop'},
  {id:'col_aurora',    cat:'Natuur', label:'Aurora',      image:'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=1920&h=1080&fit=crop'},

  // ── Kleur ──
  {id:'sky',      cat:'Kleur', label:'Lucht',      light:'linear-gradient(135deg,#74b3d8 0%,#a8c8e8 30%,#c5d8f0 60%,#b8d4e8 100%)',   dark:'linear-gradient(135deg,#1a3a52 0%,#1e4a65 30%,#244d70 60%,#1a4060 100%)'},
  {id:'sunset',   cat:'Kleur', label:'Zonsonder.', light:'linear-gradient(135deg,#f7a07a 0%,#f4c38a 30%,#f7dba0 60%,#f0a090 100%)',   dark:'linear-gradient(135deg,#4a200e 0%,#5e2e14 30%,#6c3018 60%,#4a2216 100%)'},
  {id:'rose',     cat:'Kleur', label:'Roos',       light:'linear-gradient(135deg,#e8a0b8 0%,#f0c0d0 30%,#f8d8e0 60%,#e0a0c0 100%)',   dark:'linear-gradient(135deg,#42101e 0%,#561826 30%,#60202e 60%,#421220 100%)'},
  {id:'peach',    cat:'Kleur', label:'Perzik',     light:'linear-gradient(135deg,#f8c8a0 0%,#fcd8b8 30%,#feecd8 60%,#f8c8a8 100%)',   dark:'linear-gradient(135deg,#3e2008 0%,#522a0e 30%,#5c2e12 60%,#402210 100%)'},
  {id:'mint',     cat:'Kleur', label:'Mint',       light:'linear-gradient(135deg,#6abfa0 0%,#8dd4be 30%,#b8e8da 60%,#78c8a8 100%)',   dark:'linear-gradient(135deg,#0c2e20 0%,#103c28 30%,#144430 60%,#0e3424 100%)'},
  {id:'lavender', cat:'Kleur', label:'Lavendel',   light:'linear-gradient(135deg,#9a8abf 0%,#b8a8d8 30%,#d4c8ec 60%,#a898c8 100%)',   dark:'linear-gradient(135deg,#1e1630 0%,#28203e 30%,#302848 60%,#221a36 100%)'},
  {id:'forest',   cat:'Kleur', label:'Bos',        light:'linear-gradient(135deg,#3d6b4f 0%,#6aab7a 30%,#a8d4a0 60%,#5a8c6a 100%)',   dark:'linear-gradient(135deg,#0d2016 0%,#112a1c 30%,#153022 60%,#0f2418 100%)'},
  {id:'sand',     cat:'Kleur', label:'Zand',       light:'linear-gradient(135deg,#d4b896 0%,#e8d0b0 30%,#f4e4cc 60%,#dcc4a0 100%)',   dark:'linear-gradient(135deg,#2e2010 0%,#3c2a16 30%,#44301c 60%,#342216 100%)'},
  {id:'neon_cyber',   cat:'Kleur', label:'Cyber',      light:'linear-gradient(135deg,#0d0221 0%,#1a0533 30%,#2d0a4e 60%,#3d1060 100%)',   dark:'linear-gradient(135deg,#050010 0%,#0d0221 30%,#1a0533 60%,#250840 100%)'},
  {id:'neon_acid',    cat:'Kleur', label:'Acid',        light:'linear-gradient(135deg,#00ff88 0%,#00e5ff 40%,#7b2fff 100%)',               dark:'linear-gradient(135deg,#003322 0%,#003344 40%,#1a0055 100%)'},
  {id:'neon_hotpink', cat:'Kleur', label:'Hot Pink',    light:'linear-gradient(135deg,#ff006e 0%,#fb5607 40%,#ffbe0b 100%)',               dark:'linear-gradient(135deg,#3d001a 0%,#3d1000 40%,#3d2d00 100%)'},
  {id:'neon_electric',cat:'Kleur', label:'Electric',    light:'linear-gradient(135deg,#00d4ff 0%,#0066ff 50%,#6600ff 100%)',               dark:'linear-gradient(135deg,#003340 0%,#001a40 50%,#1a0040 100%)'},
  {id:'nat_dawn',   cat:'Kleur', label:'Dageraad',   light:'linear-gradient(160deg,#ffecd2 0%,#fcb69f 40%,#ff9a9e 100%)',               dark:'linear-gradient(160deg,#3d2a1a 0%,#3d2010 40%,#3d1018 100%)'},
  {id:'nat_ocean',  cat:'Kleur', label:'Oceaan',      light:'linear-gradient(160deg,#a8edea 0%,#43b8c0 40%,#2877b8 100%)',               dark:'linear-gradient(160deg,#0a2a2a 0%,#0a2428 40%,#071a30 100%)'},
  {id:'nat_aurora', cat:'Kleur', label:'Aurora',      light:'linear-gradient(160deg,#a8ff78 0%,#78ffd6 40%,#4facfe 100%)',               dark:'linear-gradient(160deg,#0d2200 0%,#003322 40%,#001a3d 100%)'},
  {id:'nat_desert', cat:'Kleur', label:'Woestijn',    light:'linear-gradient(160deg,#f9d976 0%,#f39f86 40%,#c0392b 100%)',               dark:'linear-gradient(160deg,#3d3000 0%,#3d1a0d 40%,#2d0800 100%)'},
  {id:'drk_midnight',cat:'Kleur', label:'Middernacht', light:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',              dark:'linear-gradient(135deg,#0a0a15 0%,#0b1020 50%,#071a30 100%)'},
  {id:'drk_obsidian',cat:'Kleur', label:'Obsidiaan',   light:'linear-gradient(135deg,#0d0d0d 0%,#1a1a1a 50%,#2d2d2d 100%)',             dark:'linear-gradient(135deg,#050505 0%,#0d0d0d 50%,#1a1a1a 100%)'},
  {id:'drk_charcoal',cat:'Kleur', label:'Houtskool',   light:'linear-gradient(135deg,#2c3e50 0%,#3d5166 50%,#4a6278 100%)',              dark:'linear-gradient(135deg,#141e28 0%,#1e2d3d 50%,#243044 100%)'},
  {id:'drk_plum',    cat:'Kleur', label:'Pruim',        light:'linear-gradient(135deg,#2d1b4e 0%,#3d2460 50%,#4e2d72 100%)',             dark:'linear-gradient(135deg,#160d26 0%,#1e1230 50%,#271840 100%)'},
  ];

const THEME_COLORS=[
  {hex:'#0062ff',idx:0},
  {hex:'#ff6b6b',idx:1},
  {hex:'#10b981',idx:2},
  {hex:'#f59e0b',idx:3},
  {hex:'#8b5cf6',idx:4}
];

const SURL={google:q=>`https://www.google.com/search?q=${e(q)}`,bing:q=>`https://www.bing.com/search?q=${e(q)}`,duckduckgo:q=>`https://duckduckgo.com/?q=${e(q)}`,brave:q=>`https://search.brave.com/search?q=${e(q)}`,ecosia:q=>`https://www.ecosia.org/search?q=${e(q)}`,startpage:q=>`https://www.startpage.com/search?q=${e(q)}`};
const AURL={chatgpt:q=>`https://chatgpt.com/?q=${e(q)}`,claude:q=>`https://claude.ai/new?q=${e(q)}`,gemini:q=>`https://gemini.google.com/app?q=${e(q)}`,perplexity:q=>`https://www.perplexity.ai/search?q=${e(q)}`,copilot:q=>`https://copilot.microsoft.com/?q=${e(q)}`,mistral:q=>`https://chat.mistral.ai/chat?q=${e(q)}`};
const SN={google:'Google',bing:'Bing',duckduckgo:'DuckDuckGo',brave:'Brave Search',ecosia:'Ecosia',startpage:'Startpage'};
const AN={chatgpt:'ChatGPT',claude:'Claude',gemini:'Gemini',perplexity:'Perplexity',copilot:'Copilot',mistral:'Le Chat'};
function e(q){return encodeURIComponent(q)}
function fav(d){return`https://www.google.com/s2/favicons?domain=${d}&sz=128`}
function magUrl(path){return()=>`https://${cfg.magSchool||''}.magister.net${path}`}
function zerUrl(){return()=>`https://${cfg.zerSchool||''}.zportal.nl/?sso=true`}

const LIBRARY=[
  {cat:'Meer van HF.',entries:[
    {name:'Velios+',     icon:fav('hangzhouferrari.github.io/veliosplus'),  url: 'https://hangzhouferrari.github.io/veliosplus',            path:'assets/shortcutlibrary/icon_vplus256x256.png'},
    {name:'vRooster', icon:fav('hangzhouferrari.github.io/vRooster'),  url: 'https://hangzhouferrari.github.io/vRooster',path:'assets/shortcutlibrary/icon_vrooster256x256.png'},
  ]},
  {cat:'Magister',entries:[
    {name:'Magister',     icon:fav('magister.net'),  url:magUrl('/magister/#/'),            path:'assets/shortcutlibrary/icon_magister256x256.png'},
    {name:'Leermiddelen', icon:fav('magister.net'),  url:magUrl('/magister/#/leermiddelen'),path:'assets/shortcutlibrary/icon_leermiddelen256x256.png'},
    {name:'Cijfers',      icon:fav('magister.net'),  url:magUrl('/magister/#/cijfers'),      path:'assets/shortcutlibrary/icon_cijfers256x256.png'},
    {name:'Afwezigheid',  icon:fav('magister.net'),  url:magUrl('/magister/#/afwezigheid'),  path:'assets/shortcutlibrary/icon_afwezigheid256x256.png'},
    {name:'Zermelo',      icon:fav('zportal.nl'),    url:zerUrl(),                           path:'assets/shortcutlibrary/icon_zermelo256x256.png'},
  ]},
  {cat:'Google',entries:[
    {name:'Google',       icon:fav('google.com'),        url:'https://google.com'},
    {name:'Gmail',        icon:fav('gmail.com'),          url:'https://mail.google.com'},
    {name:'Drive',        icon:fav('drive.google.com'),   url:'https://drive.google.com'},
    {name:'Maps',         icon:fav('maps.google.com'),    url:'https://maps.google.com'},
    {name:'YouTube',      icon:fav('youtube.com'),        url:'https://youtube.com',path:'Assets/Icons/Light/Default/youtube.png'},
    {name:'Meet',         icon:fav('meet.google.com'),    url:'https://meet.google.com'},
  ]},
  {cat:'Microsoft',entries:[
    {name:'Outlook',      icon:fav('outlook.com'),        url:'https://outlook.office.com/mail/',path:'assets/shortcutlibrary/icon_outlook.svg'},
    {name:'Microsoft 365',icon:fav('microsoft365.com'),   url:'https://microsoft365.com/apps',   path:'assets/shortcutlibrary/icon_m365.png'},
    {name:'Teams',        icon:fav('teams.microsoft.com'),url:'https://teams.microsoft.com'},
    {name:'OneDrive',     icon:fav('onedrive.live.com'),  url:'https://onedrive.live.com'},
    {name:'SharePoint',   icon:fav('sharepoint.com'),     url:'https://sharepoint.com'},
  ]},
  {cat:'Sociaal',entries:[
    {name:'Instagram',    icon:fav('instagram.com'),  url:'https://instagram.com'},
    {name:'X / Twitter',  icon:fav('x.com'),          url:'https://x.com'},
    {name:'Reddit',       icon:fav('reddit.com'),     url:'https://reddit.com'},
    {name:'TikTok',       icon:fav('tiktok.com'),     url:'https://tiktok.com',path:'Assets/Icons/Light/Default/tiktok.png'},
    {name:'LinkedIn',     icon:fav('linkedin.com'),   url:'https://linkedin.com'},
    {name:'Discord',      icon:fav('discord.com'),    url:'https://discord.com'},
    {name:'Snapchat',     icon:fav('snapchat.com'),   url:'https://snapchat.com'},
  ]},
  {cat:'Entertainment',entries:[
    {name:'Netflix',      icon:fav('netflix.com'),         url:'https://netflix.com'},
    {name:'Spotify',      icon:fav('open.spotify.com'),    url:'https://open.spotify.com',path:'Assets/Icons/Light/Default/spotify.png'},
    {name:'Disney+',      icon:fav('disneyplus.com'),      url:'https://disneyplus.com'},
    {name:'Twitch',       icon:fav('twitch.tv'),           url:'https://twitch.tv'},
    {name:'SoundCloud',   icon:fav('soundcloud.com'),      url:'https://soundcloud.com'},
    {name:'BandLab',      icon:fav('bandlab.com'),         url:'https://bandlab.com',path:'Assets/Icons/Light/Default/bandlab.png'},
  ]},
  {cat:'Leren',entries:[
    {name:'Wikipedia',    icon:fav('wikipedia.org'),       url:'https://wikipedia.org'},
    {name:'Quizlet',      icon:fav('quizlet.com'),         url:'https://quizlet.com',path:'Assets/Icons/Light/Default/quizlet.png'},
    {name:'StudyGo',      icon:fav('studygo.com'),         url:'https://studygo.com/nl/learn/recent',path:'Assets/Icons/Light/Default/wrts.png'},
    {name:'Duolingo',     icon:fav('duolingo.com'),        url:'https://duolingo.com'},
    {name:'Khan Academy', icon:fav('khanacademy.org'),     url:'https://khanacademy.org'},
    {name:'ChatGPT',      icon:fav('chatgpt.com'),         url:'https://chatgpt.com',path:'Assets/Icons/Light/Default/chatgpt.png'},
    {name:'Claude',       icon:fav('claude.ai'),           url:'https://claude.ai'},
  ]},
  {cat:'Dev & Tech',entries:[
    {name:'GitHub',       icon:fav('github.com'),          url:'https://github.com'},
    {name:'Stack Overflow',icon:fav('stackoverflow.com'),  url:'https://stackoverflow.com'},
    {name:'MDN',          icon:fav('developer.mozilla.org'),url:'https://developer.mozilla.org'},
    {name:'CodePen',      icon:fav('codepen.io'),          url:'https://codepen.io'},
    {name:'Figma',        icon:fav('figma.com'),           url:'https://figma.com'},
    {name:'Vercel',       icon:fav('vercel.com'),          url:'https://vercel.com'},
    {name:'Netlify',      icon:fav('netlify.com'),         url:'https://netlify.com'},
  ]},
  {cat:'Games',entries:[
    {name:'CrazyGames',   icon:fav('crazygames.com'),      url:'https://crazygames.com',path:'Assets/Icons/Header/Light/Default/Crazygames.png'},
    {name:'Poki',         icon:fav('poki.com'),            url:'https://poki.com/nl',   path:'Assets/Icons/Header/Light/Default/Poki.png'},
    {name:'Roblox',       icon:fav('roblox.com'),          url:'https://roblox.com',    path:'Assets/Icons/Header/Light/Default/Roblox.png'},
    {name:'Google Snake', icon:fav('google.com'),          url:'https://g.co/kgs/snake',path:'Assets/Icons/Header/Light/Default/Gsnake.png'},
    {name:'Smash Karts',  icon:fav('smashkarts.io'),       url:'https://smashkarts.io', path:'Assets/Icons/Header/Light/Default/Smashkarts.png'},
  ]},
  {cat:'Nieuws',entries:[
    {name:'NOS',          icon:fav('nos.nl'),              url:'https://nos.nl'},
    {name:'Nu.nl',        icon:fav('nu.nl'),               url:'https://nu.nl'},
    {name:'AD',           icon:fav('ad.nl'),               url:'https://ad.nl'},
    {name:'RTL Nieuws',   icon:fav('rtlnieuws.nl'),        url:'https://rtlnieuws.nl'},
    {name:'BBC',          icon:fav('bbc.com'),             url:'https://bbc.com/news'},
  ]},
];

const DEFAULT_SITES=[
  {name:'Google',url:'https://google.com'},{name:'YouTube',url:'https://youtube.com'},
  {name:'Reddit',url:'https://reddit.com'},{name:'Wikipedia',url:'https://wikipedia.org'},
  {name:'GitHub',url:'https://github.com'},{name:'X',url:'https://x.com'},
  {name:'Instagram',url:'https://instagram.com'},{name:'Netflix',url:'https://netflix.com'},
  {name:'Spotify',url:'https://open.spotify.com'},{name:'NOS',url:'https://nos.nl'},
];

// ══════════════════════════════════════════
//   STATE
// ══════════════════════════════════════════
let sites=JSON.parse(localStorage.getItem('sp_s6')||'null')||DEFAULT_SITES.map(s=>({...s}));
let cfg  =JSON.parse(localStorage.getItem('sp_c6')||'null')||{
  bg:'col_velios',bgCustom:null,recentUploads:[],bgDim:false,bgDimLevel:50,
  accent:'#0062ff',
  dark:false,duotone:false,iconTint:100,accentUI:false,lastCustomAccent:'#0062ff',recentCustomAccents:[],
  searchProvider:'google',aiProvider:'chatgpt',newTab:true,aiMode:false,
  glance:{time:true,date:true,weather:false,h24:true,week:false},
  weatherCity:'Amsterdam',weatherCache:null,
  magSchool:'',zerSchool:'',
};
// fill in missing keys
const defaults={recentUploads:[],bgDim:false,bgDimLevel:50,accentUI:false,iconTint:100,lastCustomAccent:'#0062ff',recentCustomAccents:[],magSchool:'',zerSchool:''};
Object.keys(defaults).forEach(k=>{if(cfg[k]===undefined)cfg[k]=defaults[k];});
if(!Array.isArray(cfg.recentCustomAccents))cfg.recentCustomAccents=Array.isArray(cfg.recentAccents)?cfg.recentAccents:[];
if(!/^#[0-9a-f]{6}$/i.test(cfg.lastCustomAccent))cfg.lastCustomAccent=cfg.recentCustomAccents[0]||'#0062ff';
if(!THEME_COLORS.some(c=>c.hex===cfg.accent)&&cfg.lastCustomAccent==='#0062ff')cfg.lastCustomAccent=cfg.accent;
if(!cfg.glance)cfg.glance={time:true,date:true,weather:false,h24:true,week:false};
if(cfg.glance.week===undefined)cfg.glance.week=false;

function saveS(){localStorage.setItem('sp_s6',JSON.stringify(sites))}
function saveC(){localStorage.setItem('sp_c6',JSON.stringify(cfg))}

// ══════════════════════════════════════════
//   UNDO/REDO
// ══════════════════════════════════════════
let undoStack=[],redoStack=[],lastEditTime=0;
const EDIT_TIMEOUT=60000; // 1 minuut
function canUndo(){return undoStack.length>0&&(Date.now()-lastEditTime)<EDIT_TIMEOUT;}
function canRedo(){return redoStack.length>0&&(Date.now()-lastEditTime)<EDIT_TIMEOUT;}
function saveSnapshot(){
  undoStack.push(JSON.parse(JSON.stringify(sites)));
  redoStack=[];
  lastEditTime=Date.now();
  updateUndoRedoButtons();
  // Limit stack to 20 entries
  if(undoStack.length>20)undoStack.shift();
}
function updateUndoRedoButtons(){
  const canU=canUndo(),canR=canRedo();
  const btnUndo=document.getElementById('btnUndo');
  const btnRedo=document.getElementById('btnRedo');
  if(btnUndo){btnUndo.style.opacity=canU?'1':'.4';btnUndo.disabled=!canU;btnUndo.style.pointerEvents=canU?'auto':'none';}
  if(btnRedo){btnRedo.style.opacity=canR?'1':'.4';btnRedo.disabled=!canR;btnRedo.style.pointerEvents=canR?'auto':'none';}
}
function undo(){
  if(!canUndo())return;
  redoStack.push(JSON.parse(JSON.stringify(sites)));
  sites=undoStack.pop();
  saveS();renderGrid();updateUndoRedoButtons();showToast('Ongedaan gemaakt');
}
function redo(){
  if(!canRedo())return;
  undoStack.push(JSON.parse(JSON.stringify(sites)));
  sites=redoStack.pop();
  saveS();renderGrid();updateUndoRedoButtons();showToast('Gedaan gemaakt');
}
function getFavUrl(url){try{return`https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=128`}catch{return''}}
function h2r(hex,a){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return`rgb(${r},${g},${b})`}
function weekNum(d){const s=new Date(Date.UTC(d.getFullYear(),0,1));return Math.ceil(((d-s)/86400000+s.getUTCDay()+1)/7)}
function resolveUrl(entry){return typeof entry.url==='function'?entry.url():entry.url}

// ══════════════════════════════════════════
//   APPLY — visual theme settings
// ══════════════════════════════════════════
function computeGlassVars(){
  const root=document.documentElement.style;
  const vars=['--gt','--gb','--bbg','--bho','--ibg','--ic','--ubg','--selbg','--m3-surface','--m3-container','--m3-on-surface','--m3-outline'];
  root.setProperty('--tile-opacity','1');
  document.body.classList.toggle('accent-ui',cfg.accentUI);
  if(!cfg.accentUI){vars.forEach(v=>root.removeProperty(v));return;}
  const hex=cfg.accent.replace('#','');
  const r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16);
  const base=cfg.dark?28:255;
  const tone=strength=>`rgb(${Math.round(r*strength+base*(1-strength))},${Math.round(g*strength+base*(1-strength))},${Math.round(b*strength+base*(1-strength))})`;
  root.setProperty('--gt',tone(cfg.dark ? .18 : .08));
  root.setProperty('--gb',tone(cfg.dark ? .22 : .12));
  root.setProperty('--bbg',tone(cfg.dark ? .18 : .08));
  root.setProperty('--bho',tone(cfg.dark ? .26 : .16));
  root.setProperty('--ibg',tone(cfg.dark ? .18 : .08));
  root.setProperty('--ic',tone(cfg.dark ? .15 : .06));
  root.setProperty('--ubg',tone(cfg.dark ? .18 : .08));
  root.setProperty('--selbg',tone(cfg.dark ? .18 : .08));
  root.setProperty('--m3-surface',tone(cfg.dark ? .14 : .06));
  root.setProperty('--m3-container',tone(cfg.dark ? .24 : .12));
  const onBase=cfg.dark?255:0;
  const onTone=strength=>`rgb(${Math.round(r*strength+onBase*(1-strength))},${Math.round(g*strength+onBase*(1-strength))},${Math.round(b*strength+onBase*(1-strength))})`;
  root.setProperty('--m3-on-surface',onTone(cfg.dark ? .48 : .64));
  root.setProperty('--m3-outline',tone(cfg.dark ? .36 : .24));
}
function applyBgDim(){const level=Math.max(0,Math.min(100,Number(cfg.bgDimLevel??50))),active=Boolean(cfg.bgDim),dim=document.getElementById('bgDim'),control=document.getElementById('bgDimControl'),range=document.getElementById('bgDimRange'),value=document.getElementById('bgDimValue');cfg.bgDimLevel=level;if(dim)dim.style.background=active?`rgba(0,0,0,${level*.82/100})`:'transparent';document.documentElement.style.setProperty('--bg-dim-percent',`${level}%`);if(control)control.classList.toggle('show',active);if(range)range.value=String(level);if(value)value.value=value.textContent=`${level}%`;}

function applyBg(){
  const bl=document.getElementById('bgLayer');
  if(cfg.bgCustom){bl.style.backgroundImage=`url(${cfg.bgCustom})`;bl.style.opacity='1';document.body.style.background='#111';}
  else{
    const wp=WPS.find(w=>w.id===cfg.bg)||WPS[0];
    if(wp.image){bl.style.backgroundImage=`url(${wp.image})`;bl.style.opacity='1';document.body.style.background='#111';}
    else{bl.style.backgroundImage='';bl.style.opacity='0';document.body.style.background=cfg.dark?wp.dark:wp.light;document.body.style.backgroundAttachment='fixed';}
  }
}
function applyDark(){
  const root=document.documentElement.style;
  const body=document.body;
  const themeMeta=document.getElementById('theme-color-meta');
  if(cfg.dark){
    body.classList.add('dark-mode');
    themeMeta?.setAttribute('content','#0a0812');
    root.setProperty('--bg-grad','linear-gradient(180deg, rgb(10, 10, 10) 0%, rgb(10, 8, 18) 100%)');
    root.setProperty('--glass','rgb(34,33,41)');
    root.setProperty('--glass2','rgb(34,33,41)');
    root.setProperty('--text','#ffffff');
    root.setProperty('--text2','#e9e9e9');
    root.setProperty('--text3','rgb(190,190,190)');
    root.setProperty('--glass-border','rgb(58,58,60)');
    root.setProperty('--glass-shadow','none');
    root.setProperty('--glass-shadow-lg','none');
  }else{
    body.classList.remove('dark-mode');
    themeMeta?.setAttribute('content','#f0eef9');
    root.setProperty('--bg-grad','linear-gradient(160deg,#f0eef9 0%,#ddd8f0 50%,#cfc8e8 100%)');
    root.setProperty('--glass','rgb(255,255,255)');
    root.setProperty('--glass2','rgb(255,255,255)');
    root.setProperty('--text','#0b0f2a');
    root.setProperty('--text2','#3d3a55');
    root.setProperty('--text3','#7c7899');
    root.setProperty('--glass-border','rgb(200,195,230)');
    root.setProperty('--glass-shadow','none');
    root.setProperty('--glass-shadow-lg','none');
  }
  applyBg();buildBgGrid();applyAccent();
}
function applyAccent(){
  const root=document.documentElement.style;
  const hex=cfg.accent.replace('#','');
  const r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16);
  root.setProperty('--accent',cfg.accent);
  root.setProperty('--accent2',`rgb(${Math.max(0,r-20)},${Math.max(0,g-20)},${Math.max(0,b-20)})`);
  const base=cfg.dark?28:255;
  const strength=cfg.dark?.20:.12;
  root.setProperty('--accent-light',`rgb(${Math.round(r*strength+base*(1-strength))},${Math.round(g*strength+base*(1-strength))},${Math.round(b*strength+base*(1-strength))})`);
  document.querySelectorAll('.duo').forEach(el=>el.style.background=cfg.accent);
  computeGlassVars();applyDuotone();refreshTogColors();
}
function applyDuotone(){const level=Math.max(0,Math.min(100,Number(cfg.iconTint??100))),strength=cfg.duotone?level/100:0,hex=cfg.accent.replace('#',''),r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16),base=cfg.dark?0:255,baseTone=cfg.accentUI?(cfg.dark ? .24 : .12):0,baseMix=c=>c*baseTone+base*(1-baseTone),mix=c=>Math.round(c*strength+baseMix(c)*(1-strength));cfg.iconTint=level;document.body.classList.toggle('duotone-active',cfg.duotone);document.documentElement.style.setProperty('--icon-tint-color',`rgb(${mix(r)},${mix(g)},${mix(b)})`);document.documentElement.style.setProperty('--icon-tint-percent',`${level}%`);syncIconTintControl();}
function applySearchUI(){const inp=document.getElementById('searchInput');inp.placeholder=cfg.aiMode?`Vragen aan ${AN[cfg.aiProvider]}...`:`Zoeken met ${SN[cfg.searchProvider]}...`;document.getElementById('btnAI').classList.toggle('on',cfg.aiMode);}
function refreshTogColors(){
  [['togDark','dark'],['togBgDim','bgDim'],['togDuo','duotone'],['togNewTab','newTab'],['togAccentUI','accentUI'],
   ['togGTime','time'],['togGDate','date'],['togGWeather','weather'],['togG24h','h24'],['togGWeek','week']
  ].forEach(([id,key])=>{
    const el=document.getElementById(id);if(!el)return;
    const val=['time','date','weather','h24','week'].includes(key)?cfg.glance[key]:cfg[key];
    el.classList.toggle('on',val);
    el.style.background=val?h2r(cfg.accent,.48):'';
  });
}
function applyAll(){applyBg();applyDark();applyAccent();applyDuotone();applyBgDim();applySearchUI();syncGlanceUI()}

// ══════════════════════════════════════════
//   GRID
// ══════════════════════════════════════════
const gridEl=document.getElementById('grid');
function renderGrid(){
  const sw=document.getElementById('searchWrap');
  if(sw&&gridEl.offsetWidth)sw.style.maxWidth=gridEl.offsetWidth+'px';
  gridEl.innerHTML='';
  sites.forEach((site,i)=>{
    const tile=document.createElement('a');
    tile.className='tile';tile.href=site.url;tile.target='_blank';tile.rel='noopener noreferrer';
    tile.draggable=true;tile.dataset.index=i;
    const rm=document.createElement('button');rm.className='tile-remove';rm.innerHTML='✕';
    rm.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();removeSite(i);});
    tile.appendChild(rm);
    const box=document.createElement('div');box.className='tile-icon';
    const duo=document.createElement('div');duo.className='duo';duo.style.background=cfg.accent;box.appendChild(duo);
    const img=document.createElement('img');img.src=site.icon||getFavUrl(site.url);img.onerror=()=>{img.src=getFavUrl(site.url);};box.appendChild(img);
    const lbl=document.createElement('div');lbl.className='tile-label';lbl.textContent=site.name;
    tile.appendChild(box);tile.appendChild(lbl);
    tile.addEventListener('dragstart',onDS);tile.addEventListener('dragend',onDE);
    tile.addEventListener('dragover',onDO);tile.addEventListener('dragleave',onDL);tile.addEventListener('drop',onDR);
    tile.addEventListener('click',ev=>{if(document.body.classList.contains('edit-active')||document.body.classList.contains('reorder-mode'))ev.preventDefault();});
    gridEl.appendChild(tile);
  });
}
function removeSite(i){saveSnapshot();sites.splice(i,1);saveS();renderGrid();showToast('Snelkoppeling verwijderd');}
window.addEventListener('resize',()=>renderGrid());

// ══════════════════════════════════════════
//   DRAG
// ══════════════════════════════════════════
let dSrc=null;
function onDS(e){if(!document.body.classList.contains('reorder-mode')){e.preventDefault();return;}dSrc=this;this.classList.add('dragging');e.dataTransfer.effectAllowed='move';}
function onDE(){document.querySelectorAll('.tile').forEach(t=>t.classList.remove('dragging','drag-over'));dSrc=null;}
function onDO(e){if(!dSrc||dSrc===this)return;e.preventDefault();document.querySelectorAll('.tile').forEach(t=>t.classList.remove('drag-over'));this.classList.add('drag-over');}
function onDL(){this.classList.remove('drag-over');}
function onDR(e){if(!dSrc||dSrc===this)return;e.preventDefault();saveSnapshot();const f=+dSrc.dataset.index,t=+this.dataset.index,m=sites.splice(f,1)[0];sites.splice(t,0,m);saveS();renderGrid();}

// ══════════════════════════════════════════
//   SEARCH
// ══════════════════════════════════════════
document.getElementById('searchInput').addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;const q=e.target.value.trim();if(!q)return;
  const url=cfg.aiMode?AURL[cfg.aiProvider](q):SURL[cfg.searchProvider](q);
  window.open(url,cfg.newTab?'_blank':'_self');e.target.value='';
});
document.getElementById('btnAI').addEventListener('click',()=>{cfg.aiMode=!cfg.aiMode;saveC();applySearchUI();showToast(cfg.aiMode?`AI: ${AN[cfg.aiProvider]}`:`Zoeken: ${SN[cfg.searchProvider]}`);});

// ══════════════════════════════════════════
//   EDIT DROPDOWN
// ══════════════════════════════════════════
const editOv=document.getElementById('editOv'),editOvBox=document.getElementById('editOvBox');
let reorderOn=false,removeOn=false;
function openEdit(){if(setBd.classList.contains('active')||setBd.style.display==='flex')closeSet();editOv.style.display='block';editOvBox.classList.remove('ani-out');editOvBox.classList.add('ani-in');setTimeout(()=>editOv.classList.add('active'),10);updateUndoRedoButtons();}
function closeEdit(){editOvBox.classList.remove('ani-in');editOvBox.classList.add('ani-out');editOv.classList.remove('active');setTimeout(()=>{editOv.style.display='none';editOvBox.classList.remove('ani-out');},240);document.getElementById('addForm').classList.remove('open');document.getElementById('btnAdd').classList.remove('active');}
document.getElementById('btnEdit').addEventListener('click',openEdit);
document.getElementById('btnCloseEdit').addEventListener('click',closeEdit);
editOv.addEventListener('click',e=>{if(e.target===editOv)closeEdit();});
document.getElementById('btnReorder').addEventListener('click',()=>{reorderOn=!reorderOn;document.body.classList.toggle('reorder-mode',reorderOn);document.getElementById('btnReorder').classList.toggle('active',reorderOn);closeEdit();if(reorderOn)showToast('Sleepmodeis actief');});
document.getElementById('btnRemove').addEventListener('click',()=>{removeOn=!removeOn;document.body.classList.toggle('edit-active',removeOn);document.getElementById('btnRemove').classList.toggle('active',removeOn);closeEdit();if(removeOn)showToast('Klik ✕ om te verwijderen');});
document.getElementById('btnAdd').addEventListener('click',()=>{const af=document.getElementById('addForm');af.classList.toggle('open');document.getElementById('btnAdd').classList.toggle('active',af.classList.contains('open'));if(af.classList.contains('open'))document.getElementById('inName').focus();});
document.getElementById('btnCancAdd').addEventListener('click',()=>{document.getElementById('addForm').classList.remove('open');document.getElementById('btnAdd').classList.remove('active');document.getElementById('inName').value='';document.getElementById('inUrl').value='';});
document.getElementById('btnSubAdd').addEventListener('click',()=>{
  const nm=document.getElementById('inName').value.trim();let url=document.getElementById('inUrl').value.trim();
  if(!nm||!url){showToast('Vul naam én URL in');return;}
  if(!/^https?:\/\//i.test(url))url='https://'+url;
  if(sites.length>=20){showToast('Grid is vol (max 20)');return;}
  saveSnapshot();sites.push({name:nm,url,icon:getFavUrl(url)});saveS();renderGrid();
  document.getElementById('inName').value='';document.getElementById('inUrl').value='';
  document.getElementById('addForm').classList.remove('open');document.getElementById('btnAdd').classList.remove('active');
  closeEdit();showToast(`"${nm}" toegevoegd!`);
});
[document.getElementById('inName'),document.getElementById('inUrl')].forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('btnSubAdd').click();}));
document.getElementById('btnOpenLib').addEventListener('click',()=>{closeEdit();openLib();});
document.getElementById('btnUndo').addEventListener('click',undo);
document.getElementById('btnRedo').addEventListener('click',redo);

// ══════════════════════════════════════════
//   SETTINGS MODAL — sidebar tabs
// ══════════════════════════════════════════
const setBd=document.getElementById('setBd');
function openSet(){if(editOv.classList.contains('active')||editOv.style.display==='block')closeEdit();document.getElementById('infoCount').textContent=sites.length+' / 20';setBd.style.display='flex';setTimeout(()=>setBd.classList.add('active'),10);refreshMagTab();}
const used = new Blob(Object.values(localStorage)).size;
const mb = (used / 1024 / 1024).toFixed(2);
const pct = ((used / (5 * 1024 * 1024)) * 100).toFixed(0);
document.getElementById('infoStorage').textContent = `${mb} MB / 5 MB (${pct}%)`;
function closeSet(){setBd.classList.remove('active');setTimeout(()=>setBd.style.display='none',400);}
document.getElementById('btnSettings').addEventListener('click',openSet);
document.getElementById('btnCloseSet').addEventListener('click',closeSet);
setBd.addEventListener('click',e=>{if(e.target===setBd)closeSet();});

const TAB_LABELS={bg:'Achtergrond',colors:'Kleuren',search:'Zoeken',glance:'Snelle kijk',magister:'Magister',info:'Info'};
document.querySelectorAll('#setNav .stab, #setNav+*+* .stab, .modal-sidebar .stab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    const modal=tab.closest('.modal-box');
    modal.querySelectorAll('.stab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const body=modal.querySelector('.modal-body');
    body.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
    const pane=body.querySelector('#tab-'+tab.dataset.tab);if(pane)pane.classList.add('active');
    const titleEl=modal.querySelector('.modal-title');if(titleEl&&TAB_LABELS[tab.dataset.tab])titleEl.textContent=TAB_LABELS[tab.dataset.tab];
  });
});

// BG GRID
function buildBgGrid(){
  const container=document.getElementById('bgCategoriesContainer');container.innerHTML='';
  const categories={};
  WPS.forEach(wp=>{if(!categories[wp.cat])categories[wp.cat]=[];categories[wp.cat].push(wp);});
  
  Object.keys(categories).forEach(catName=>{
    // Label
    const catLbl=document.createElement('div');catLbl.className='sl';
    catLbl.textContent=catName==='Natuur'?'Natuur':catName;
    container.appendChild(catLbl);
    
    // Grid
    const grid=document.createElement('div');grid.className='bg-grid';
    categories[catName].forEach(wp=>{
      const th=document.createElement('div');th.className='bg-th';
      if(wp.image){th.style.backgroundImage=`url(${wp.image})`;}else{th.style.background=cfg.dark?wp.dark:wp.light;}
      th.innerHTML=`<div class="bg-th-lbl">${wp.label}</div>`;
      if(cfg.bg===wp.id&&!cfg.bgCustom)th.classList.add('sel');
      th.addEventListener('click',()=>{cfg.bg=wp.id;cfg.bgCustom=null;saveC();applyBg();document.querySelectorAll('.bg-th,.recent-th').forEach(t=>t.classList.remove('sel'));th.classList.add('sel');showToast('Achtergrond gewijzigd');});
      grid.appendChild(th);
    });
    container.appendChild(grid);
  });
}
buildBgGrid();
function renderRecent(){const el=document.getElementById('recentGrid');el.innerHTML='';for(let i=0;i<4;i++){const u=cfg.recentUploads[i];if(u){const th=document.createElement('div');th.className='recent-th';th.style.backgroundImage=`url(${u.data})`;if(cfg.bgCustom===u.data)th.classList.add('sel');th.addEventListener('click',()=>{cfg.bgCustom=u.data;cfg.bg='custom';saveC();applyBg();document.querySelectorAll('.bg-th,.recent-th').forEach(t=>t.classList.remove('sel'));th.classList.add('sel');showToast('Recente achtergrond geselecteerd');});el.appendChild(th);}else{const em=document.createElement('div');em.className='recent-empty';em.textContent='Leeg';el.appendChild(em);}}}
renderRecent();
const uz=document.getElementById('uploadZone'),bfi=document.getElementById('bgFileInput');
uz.addEventListener('click',()=>bfi.click());
uz.addEventListener('dragover',e=>{e.preventDefault();uz.style.borderColor='var(--ifo)';});
uz.addEventListener('dragleave',()=>{uz.style.borderColor='';});
uz.addEventListener('drop',e=>{e.preventDefault();uz.style.borderColor='';const f=e.dataTransfer.files[0];if(f)doUpload(f);});
bfi.addEventListener('change',e=>{if(e.target.files[0])doUpload(e.target.files[0]);bfi.value='';});
function doUpload(file){if(!file.type.startsWith('image/')){showToast('Alleen afbeeldingen');return;}if(file.size>10*1024*1024){showToast('Max 10 MB');return;}const r=new FileReader();r.onload=ev=>{const d=ev.target.result;cfg.recentUploads=cfg.recentUploads.filter(u=>u.data!==d);cfg.recentUploads.unshift({data:d,ts:Date.now()});cfg.recentUploads=cfg.recentUploads.slice(0,4);cfg.bgCustom=d;cfg.bg='custom';saveC();applyBg();renderRecent();document.querySelectorAll('.bg-th,.recent-th').forEach(t=>t.classList.remove('sel'));showToast('Achtergrond ingesteld!');};r.readAsDataURL(file);}

// COLOR SWATCHES
const swCont=document.getElementById('colorSwatches');
const customAccentRow=document.getElementById('customAccentRow');
const customAccentInput=document.getElementById('customColorInput');
const customAccentBtn=document.getElementById('btnCustomAccent');
let customAccentSelected=!THEME_COLORS.some(c=>c.hex===cfg.accent);
function accentShades(hex){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);const mix=(base,strength)=>`rgb(${Math.round(r*strength+base*(1-strength))},${Math.round(g*strength+base*(1-strength))},${Math.round(b*strength+base*(1-strength))})`;return{light:mix(255,.12),dark:`rgb(${Math.round(r*.20+28*.80)},${Math.round(g*.20+28*.80)},${Math.round(b*.20+28*.80)}`};}
function rememberCustomAccent(hex){cfg.recentCustomAccents=[hex,...cfg.recentCustomAccents.filter(c=>c!==hex)].filter(c=>/^#[0-9a-f]{6}$/i.test(c)).slice(0,6);}
function applyCustomAccent(hex){customAccentSelected=true;cfg.accent=hex;cfg.lastCustomAccent=hex;rememberCustomAccent(hex);saveC();applyAccent();customAccentInput.value=hex;customAccentRow.classList.add('show');renderAccentSwatches();}
function presetAccent(hex){customAccentSelected=false;cfg.accent=hex;saveC();applyAccent();customAccentInput.value=cfg.lastCustomAccent;customAccentRow.classList.remove('show');renderAccentSwatches();}
function selectCustomAccent(){customAccentSelected=true;cfg.accent=cfg.lastCustomAccent;saveC();applyAccent();customAccentInput.value=cfg.lastCustomAccent;customAccentRow.classList.add('show');renderAccentSwatches();}
function renderRecentAccents(){let title=customAccentRow.querySelector('.recent-accent-title'),list=customAccentRow.querySelector('.recent-accent-swatches');if(!title){title=document.createElement('div');title.className='recent-accent-title';title.textContent='Recente kleuren';list=document.createElement('div');list.className='recent-accent-swatches';customAccentRow.append(title,list);}list.innerHTML='';cfg.recentCustomAccents.slice(0,6).forEach(hex=>{const sw=document.createElement('button');sw.type='button';sw.className='recent-accent-swatch';sw.style.setProperty('--recent-color',hex);sw.classList.toggle('sel',cfg.accent===hex);sw.setAttribute('aria-label',`Recente accentkleur ${hex}`);sw.addEventListener('click',()=>applyCustomAccent(hex));list.appendChild(sw);});}
function renderAccentSwatches(){swCont.innerHTML='';THEME_COLORS.forEach(({hex,idx})=>{const shades=accentShades(hex);const sw=document.createElement('button');sw.type='button';sw.className='swatch';sw.innerHTML=`<span class="swatch-segment swatch-main" style="background:${hex}"></span><span class="swatch-segment swatch-light" style="background:${shades.light}"></span><span class="swatch-segment swatch-dark" style="background:${shades.dark}"></span>`;sw.setAttribute('aria-label',`Accentkleur ${idx+1}`);sw.classList.toggle('sel',!customAccentSelected&&cfg.accent===hex);sw.addEventListener('click',()=>presetAccent(hex));swCont.appendChild(sw);});const pipette=document.createElement('button');pipette.type='button';pipette.className='swatch swatch-pipette';pipette.style.setProperty('--swatch-current',cfg.lastCustomAccent);pipette.setAttribute('aria-label','Aangepaste accentkleur');pipette.classList.toggle('sel',customAccentSelected);pipette.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 4 6 6-9.5 9.5a2.1 2.1 0 0 1-3-3L17 7"/><path d="m5 19 2 2"/></svg>';pipette.addEventListener('click',selectCustomAccent);swCont.appendChild(pipette);if(customAccentSelected)renderRecentAccents();}
customAccentBtn.addEventListener('click',()=>customAccentInput.click());
customAccentInput.addEventListener('change',e=>applyCustomAccent(e.target.value));
customAccentInput.value=cfg.lastCustomAccent;customAccentRow.classList.toggle('show',customAccentSelected);renderAccentSwatches();

// GENERAL TOGGLES
const iconTintControl=document.getElementById('iconTintControl');
const iconTintInput=document.getElementById('iconTint');
const iconTintValue=document.getElementById('iconTintValue');
function syncIconTintControl(){const level=Math.max(0,Math.min(100,Number(cfg.iconTint??100)));if(iconTintControl)iconTintControl.classList.toggle('show',cfg.duotone);if(iconTintInput)iconTintInput.value=String(level);if(iconTintValue)iconTintValue.value=iconTintValue.textContent=`${level}%`;}
iconTintInput?.addEventListener('input',e=>{cfg.iconTint=Number(e.target.value);saveC();applyDuotone();});
document.getElementById('bgDimRange')?.addEventListener('input',e=>{cfg.bgDimLevel=Number(e.target.value);saveC();applyBgDim();});
function initTog(id,getV,setV,onMsg,offMsg,afterFn){const el=document.getElementById(id);if(!el)return;el.classList.toggle('on',getV());el.style.background=getV()?h2r(cfg.accent,.48):'';el.addEventListener('click',()=>{setV(!getV());el.classList.toggle('on',getV());el.style.background=getV()?h2r(cfg.accent,.48):'';saveC();if(afterFn)afterFn();showToast(getV()?onMsg:offMsg);});}
initTog('togDark',  ()=>cfg.dark,      v=>{cfg.dark=v},       'Donkere modus aan','Lichte modus aan', applyDark);
initTog('togBgDim', ()=>cfg.bgDim,     v=>{cfg.bgDim=v},      'Achtergrond gedimd','Achtergrond helder', applyBgDim);
initTog('togAccentUI',()=>cfg.accentUI,v=>{cfg.accentUI=v},   'UI in accentkleur','Standaard UI',     ()=>{computeGlassVars();applyDuotone();});
initTog('togDuo',   ()=>cfg.duotone,   v=>{cfg.duotone=v},    'Duotoon aan','Duotoon uit',            applyDuotone);
initTog('togNewTab',()=>cfg.newTab,    v=>{cfg.newTab=v},     'Nieuw tabblad','Huidig tabblad',       ()=>{});
initTog('togGTime', ()=>cfg.glance.time,   v=>{cfg.glance.time=v},   'Tijd aan','Tijd uit',       syncGlanceUI);
initTog('togGDate', ()=>cfg.glance.date,   v=>{cfg.glance.date=v},   'Datum aan','Datum uit',     syncGlanceUI);
initTog('togGWeather',()=>cfg.glance.weather,v=>{cfg.glance.weather=v},'Weer aan','Weer uit',     syncGlanceUI);
initTog('togG24h',  ()=>cfg.glance.h24,    v=>{cfg.glance.h24=v},    '24-uurs','12-uurs',         syncGlanceUI);
initTog('togGWeek', ()=>cfg.glance.week,   v=>{cfg.glance.week=v},   'Weeknr. aan','Weeknr. uit', syncGlanceUI);

// SEARCH
document.getElementById('selSearch').value=cfg.searchProvider;
document.getElementById('selAI').value=cfg.aiProvider;
document.getElementById('selSearch').addEventListener('change',e=>{cfg.searchProvider=e.target.value;saveC();applySearchUI();showToast(`Zoekmachine: ${SN[cfg.searchProvider]}`);});
document.getElementById('selAI').addEventListener('change',e=>{cfg.aiProvider=e.target.value;saveC();applySearchUI();showToast(`AI: ${AN[cfg.aiProvider]}`);});

// ══════════════════════════════════════════
//   MAGISTER TAB
// ══════════════════════════════════════════
const magSchoolEl=document.getElementById('magSchool'),zerSchoolEl=document.getElementById('zerSchool');
magSchoolEl.value=cfg.magSchool;zerSchoolEl.value=cfg.zerSchool;
function magIsSet(){return(cfg.magSchool||'').trim().length>0;}
function zerIsSet(){return(cfg.zerSchool||'').trim().length>0;}

function saveMagAndUpdate(){
  const oldMag=cfg.magSchool, oldZer=cfg.zerSchool;
  cfg.magSchool=(magSchoolEl.value||'').trim();
  cfg.zerSchool=(zerSchoolEl.value||'').trim();
  // update already-added Magister/Zermelo tiles
  if(oldMag!==cfg.magSchool){
    const paths=['/magister/#/','/magister/#/leermiddelen','/magister/#/cijfers','/magister/#/afwezigheid'];
    sites.forEach(s=>{
      paths.forEach(p=>{
        const oldUrl=`https://${oldMag}.magister.net${p}`;
        if(s.url===oldUrl) s.url=`https://${cfg.magSchool}.magister.net${p}`;
      });
    });
  }
  if(oldZer!==cfg.zerSchool){
    const oldZerUrl=`https://${oldZer}.zportal.nl/?sso=true`;
    sites.forEach(s=>{if(s.url===oldZerUrl)s.url=`https://${cfg.zerSchool}.zportal.nl/?sso=true`;});
  }
  saveS();saveC();renderGrid();refreshMagTab();
  const warn=document.getElementById('magWarn');
  warn.style.display=(!magIsSet()&&!zerIsSet())?'block':'none';
}
magSchoolEl.addEventListener('change',saveMagAndUpdate);
zerSchoolEl.addEventListener('change',saveMagAndUpdate);

function refreshMagTab(){
  const warn=document.getElementById('magWarn');
  const notSet=!magIsSet()&&!zerIsSet();
  warn.style.display=notSet?'block':'none';
  const cont=document.getElementById('magQuickAdd');if(!cont)return;cont.innerHTML='';
  const cat=LIBRARY.find(c=>c.cat==='Magister');if(!cat)return;
  cat.entries.forEach(entry=>{
    const isZer=entry.name==='Zermelo';
    const entrySet=isZer?zerIsSet():magIsSet();
    const url=resolveUrl(entry);
    const already=sites.some(s=>s.url===url);
    const btn=document.createElement('button');btn.className='ov-btn';
    if(!entrySet)btn.style.opacity='.5';
    const chk=already?'<polyline points="4,10 8,14 16,6"/>':'<circle cx="10" cy="10" r="7.5"/><line x1="10" y1="6.5" x2="10" y2="13.5"/><line x1="6.5" y1="10" x2="13.5" y2="10"/>';
    btn.innerHTML=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6">${chk}</svg><span>${entry.name}<span class="ov-btn-desc">${entrySet?url:'Schoolnaam nog niet ingesteld'}</span></span>`;
    if(!entrySet){btn.addEventListener('click',()=>showToast('Stel eerst je schoolnaam in bij Magister'));}
    else if(!already){btn.addEventListener('click',()=>{if(sites.length>=20){showToast('Grid vol');return;}saveSnapshot();sites.push({name:entry.name,url,icon:entry.path||getFavUrl(url)});saveS();renderGrid();refreshMagTab();showToast(`"${entry.name}" toegevoegd!`);});}
    cont.appendChild(btn);
  });
}
refreshMagTab();

// ══════════════════════════════════════════
//   LIBRARY MODAL
// ══════════════════════════════════════════
const libBd=document.getElementById('libBd');
let libActiveCat=LIBRARY[0].cat;
function openLib(){buildLibNav();renderLibCat(libActiveCat);libBd.style.display='flex';setTimeout(()=>libBd.classList.add('active'),10);}
function closeLib(){libBd.classList.remove('active');setTimeout(()=>libBd.style.display='none',400);}
document.getElementById('btnCloseLib').addEventListener('click',closeLib);
libBd.addEventListener('click',e=>{if(e.target===libBd)closeLib();});

function buildLibNav(){
  const nav=document.getElementById('libNav');nav.innerHTML='';
  LIBRARY.forEach(cat=>{
    const t=document.createElement('button');t.className='stab'+(cat.cat===libActiveCat?' active':'');
    t.textContent=cat.cat;t.dataset.cat=cat.cat;
    t.addEventListener('click',()=>{libActiveCat=cat.cat;document.querySelectorAll('#libNav .stab').forEach(x=>x.classList.toggle('active',x.dataset.cat===cat.cat));renderLibCat(cat.cat);document.getElementById('libTitle').textContent=cat.cat;});
    nav.appendChild(t);
  });
  document.getElementById('libTitle').textContent=libActiveCat;
}

function renderLibCat(catName){
  const cat=LIBRARY.find(c=>c.cat===catName);if(!cat)return;
  const cont=document.getElementById('libContent');cont.innerHTML='';
  const grid=document.createElement('div');grid.className='lib-grid';
  cat.entries.forEach(entry=>{
    const isMagCat=catName==='Magister';
    const isZer=entry.name==='Zermelo';
    const entrySet=isMagCat?(isZer?zerIsSet():magIsSet()):true;
    const url=resolveUrl(entry);
    const already=sites.some(s=>s.url===url);
    const item=document.createElement('div');item.className='lib-item'+(already?' added':'');
    const iconW=document.createElement('div');iconW.className='lib-icon';
    const img=document.createElement('img');img.src=entry.path||entry.icon||getFavUrl(url);img.onerror=()=>img.src=getFavUrl(url);iconW.appendChild(img);
    const nm=document.createElement('div');nm.className='lib-name';nm.textContent=entry.name;
    const badge=document.createElement('div');badge.className='lib-badge';badge.textContent=already?'✓ toegevoegd':'+ toevoegen';
    if(!entrySet)badge.textContent='⚠ schoolnaam instellen';
    item.appendChild(iconW);item.appendChild(nm);item.appendChild(badge);
    item.addEventListener('click',()=>{
      if(!entrySet){showToast('Stel eerst je schoolnaam in bij Magister');return;}
      if(already){
        // show confirm dialog to remove
        showConfirm(
          `"${entry.name}" verwijderen?`,
          'Wil je deze snelkoppeling uit je grid verwijderen?',
          ()=>{
            saveSnapshot();
            const idx=sites.findIndex(s=>s.url===url);
            if(idx>-1){sites.splice(idx,1);saveS();renderGrid();}
            item.classList.remove('added');badge.textContent='+ toevoegen';
            refreshMagTab();showToast(`"${entry.name}" verwijderd`);
          }
        );
        return;
      }
      if(sites.length>=20){showToast('Grid vol (max 20)');return;}
      saveSnapshot();sites.push({name:entry.name,url,icon:entry.path||entry.icon||getFavUrl(url)});
      saveS();renderGrid();item.classList.add('added');badge.textContent='✓ toegevoegd';
      refreshMagTab();showToast(`"${entry.name}" toegevoegd!`);
    });
    grid.appendChild(item);
  });
  cont.appendChild(grid);
}

// ══════════════════════════════════════════
//   CONFIRM DIALOG
// ══════════════════════════════════════════
let confirmCb=null;
function showConfirm(title,desc,onYes){
  document.getElementById('confTitle').textContent=title;
  document.getElementById('confDesc').textContent=desc;
  confirmCb=onYes;
  document.getElementById('libConfirm').classList.add('show');
}
document.getElementById('confYes').addEventListener('click',()=>{document.getElementById('libConfirm').classList.remove('show');if(confirmCb)confirmCb();confirmCb=null;});
document.getElementById('confNo').addEventListener('click',()=>{document.getElementById('libConfirm').classList.remove('show');confirmCb=null;});

// ══════════════════════════════════════════
//   SNELLE KIJK
// ══════════════════════════════════════════
function syncGlanceUI(){
  const g=cfg.glance,gb=document.getElementById('glanceBar');
  const vis=g.time||g.date||g.week||g.weather;gb.style.display=vis?'':'none';
  const show=(id,v)=>document.getElementById(id).style.display=v?'':'none';
  show('gTime',g.time);show('gDate',g.date);show('gWnum',g.week);show('gWx',g.weather);
  // separators
  document.getElementById('gS1').style.display=(g.time&&(g.date||g.week||g.weather))?'':'none';
  document.getElementById('gS2').style.display=(g.date&&(g.week||g.weather))?'':'none';
  document.getElementById('gS3').style.display=(g.week&&g.weather)?'':'none';
  if(g.weather&&cfg.weatherCache)renderWeather(cfg.weatherCache);
}
function updateClock(){
  const g=cfg.glance,now=new Date();let h=now.getHours(),m=now.getMinutes(),ap='';
  if(!g.h24){ap=h>=12?' PM':' AM';h=h%12||12;}
  document.getElementById('gTime').textContent=(g.h24?String(h).padStart(2,'0'):h)+':'+String(m).padStart(2,'0')+ap;
  const days=['zo','ma','di','wo','do','vr','za'],months=['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
  document.getElementById('gDate').textContent=days[now.getDay()]+' '+now.getDate()+' '+months[now.getMonth()];
  document.getElementById('gWnum').textContent='wk '+weekNum(now);
}
setInterval(updateClock,1000);updateClock();
document.getElementById('weatherCity').value=cfg.weatherCity||'';
document.getElementById('btnFetchWeather').addEventListener('click',()=>{const c=document.getElementById('weatherCity').value.trim();if(!c)return;cfg.weatherCity=c;saveC();fetchWeather(c);});
async function fetchWeather(city){try{showToast('Weer ophalen...');const gr=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);const gd=await gr.json();if(!gd.results||!gd.results[0]){showToast('Stad niet gevonden');return;}const{latitude,longitude}=gd.results[0];const wr=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);const wd=await wr.json();const cache={temp:Math.round(wd.current_weather.temperature),code:wd.current_weather.weathercode};cfg.weatherCache=cache;saveC();renderWeather(cache);showToast(`Weer: ${cache.temp}°C`);}catch{showToast('Ophalen mislukt');}}
function renderWeather(c){const icons={0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',95:'⛈️'};document.getElementById('wxIco').textContent=icons[c.code]||'🌡️';document.getElementById('wxT').textContent=c.temp+'°C';}
if(cfg.glance.weather&&cfg.weatherCity){if(cfg.weatherCache)renderWeather(cfg.weatherCache);else fetchWeather(cfg.weatherCity);}
// Auto-refresh weer elke 10 minuten
setInterval(()=>{if(cfg.glance.weather&&cfg.weatherCity)fetchWeather(cfg.weatherCity);},600000);

// ══════════════════════════════════════════
//   BACKUP & RESTORE
// ══════════════════════════════════════════
document.getElementById('btnBackup').addEventListener('click',()=>{const d=new Date(),stamp=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');const blob=new Blob([JSON.stringify({version:'3.2',ts:Date.now(),sites,cfg},null,2)],{type:'application/json'});const a=document.createElement('a');a.download=`veliosstart-${stamp}.vsbp`;a.href=URL.createObjectURL(blob);a.click();URL.revokeObjectURL(a.href);showToast('Back-up opgeslagen als .vsbp');});
const ri=document.getElementById('restoreInput');
document.getElementById('btnRestore').addEventListener('click',()=>ri.click());
ri.addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{try{const data=JSON.parse(ev.target.result);if(!data.sites||!data.cfg){showToast('Ongeldig bestand');return;}sites=data.sites;cfg=data.cfg;saveS();saveC();applyAll();renderGrid();renderRecent();buildBgGrid();refreshMagTab();showToast('Back-up hersteld!');closeSet();}catch{showToast('Kan niet laden');}};r.readAsText(f);ri.value='';});
document.getElementById('btnReset').addEventListener('click',()=>{if(confirm('Alles resetten?')){localStorage.removeItem('sp_s6');localStorage.removeItem('sp_c6');location.reload();}});

// ══════════════════════════════════════════
//   TOAST
// ══════════════════════════════════════════
const toastEl=document.getElementById('toast');let tt;
function showToast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('show'),2600);}

// ══════════════════════════════════════════
//   INIT
// ══════════════════════════════════════════
applyAll();
renderGrid();
syncGlanceUI();
refreshMagTab();
updateUndoRedoButtons();
