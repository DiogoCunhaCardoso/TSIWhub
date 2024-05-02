const FooterHTML = `
    <footer
      class="fixed bottom-0 z-10 w-dvw p-4 border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600"
    >
      <span class="text-sm text-gray-500 sm:text-center"
        >© 2024
        <a href="https://flowbite.com/" class="hover:underline">TSIW Hub™</a>.
        All Rights Reserved.
      </span>
      <ul
        class="flex gap-4 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"
      >
        <li>
          <a
            href="https://www.esmad.ipp.pt/"
            target="_blank"
            class="hover:underline"
            >ESMAD</a
          >
        </li>
        <li>
          <a href="/templates/index.html" class="hover:underline">TSIW</a>
        </li>
        <li>
          <p>Rua D. Sancho I, n.º 981</p>
        </li>
        <li>
          <a
            href="https://www.facebook.com/pporto.esmad/?locale=pt_PT"
            target="_blank"
            ><img width="20px" src="/images/fb_logo.png" alt="facebook icon"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/esmad_pporto/" target="_blank"
            ><img
              width="20px"
              src="/images/insta_logo.png"
              alt="instagram icon"
          /></a>
        </li>
      </ul>
    </footer>
`;

document.getElementById("FooterDiv").innerHTML = FooterHTML;
