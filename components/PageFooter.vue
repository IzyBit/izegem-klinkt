<template>
  <footer class="w-100 footer mt-80 px-20 py-10">
    <div id="top-row" class="mb-10 flex justify-between">
      <img
        src="/images/footer-logo.webp"
        class="w-40 object-contain sm:hidden md:hidden lg:block"
        alt="logo"
      />
      <div
        id="info"
        class="flex gap-10 sm:w-full sm:flex-col sm:justify-between md:w-full md:flex-row lg:justify-end"
      >
        <div id="contact" class="flex flex-col">
          <h3 class="mb-3 text-3xl">Contact</h3>
          <ul class="flex flex-col gap-2">
            <li class="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <a href="tel:0473 52 39 53">0473 52 39 53</a>
            </li>
            <li class="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                />
                <path
                  d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                /></svg
              ><a href="mailto:bjorn.olivier@telenet.be"
                >bjorn.olivier@telenet.be</a
              >
            </li>
          </ul>
        </div>
        <div id="socials" class="flex flex-col">
          <h3 class="mb-5 text-3xl sm:hidden md:block lg:block xl:block">
            Sociale Media
          </h3>
          <ul class="flex flex-row items-center gap-7">
            <li>
              <a
                href="https://www.facebook.com/izegemklinkt"
                aria-label="Visit our Facebook page"
                target="_blank"
                ><svg
                  class="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 510.125"
                >
                  <path
                    fill="#fff"
                    fill-rule="nonzero"
                    d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 120.059 82.652 220.797 194.157 248.461V334.229h-52.79V256h52.79v-33.709c0-87.134 39.432-127.521 124.977-127.521 16.218 0 44.202 3.18 55.651 6.36v70.916c-6.042-.635-16.537-.954-29.575-.954-41.977 0-58.196 15.901-58.196 57.241V256h83.619l-14.365 78.229h-69.254v175.896C413.771 494.815 512 386.885 512 256z"
                  /></svg
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/izegem_klinkt/"
                aria-label="Visit our Instagram page"
                target="_blank"
                ><svg
                  class="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    fill-rule="nonzero"
                    d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.483 47.121-.092 85.407 38.03 85.499 85.16.091 47.129-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.091c.141 72.602 59.106 131.327 131.69 131.186 72.592-.141 131.35-59.09 131.209-131.692-.141-72.577-59.114-131.335-131.715-131.194-72.585.141-131.325 59.115-131.184 131.7zm237.104-137.091c.033 16.953 13.817 30.681 30.772 30.648 16.961-.033 30.689-13.811 30.664-30.764-.033-16.954-13.818-30.69-30.78-30.657-16.962.033-30.689 13.818-30.656 30.773zm-208.696 345.4c-24.958-1.087-38.511-5.234-47.543-8.709-11.961-4.629-20.496-10.178-29.479-19.094-8.966-8.95-14.532-17.46-19.202-29.397-3.508-9.032-7.73-22.569-8.9-47.527-1.269-26.982-1.559-35.077-1.683-103.432-.133-68.339.116-76.434 1.294-103.441 1.069-24.942 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.479 8.949-8.982 17.459-14.532 29.403-19.202 9.025-3.525 22.561-7.714 47.511-8.9 26.998-1.277 35.085-1.551 103.423-1.684 68.353-.132 76.448.108 103.456 1.295 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.144 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.412 3.524 9 7.714 22.553 8.892 47.494 1.285 26.999 1.576 35.095 1.7 103.433.132 68.355-.117 76.451-1.302 103.441-1.087 24.958-5.226 38.52-8.709 47.561-4.629 11.952-10.161 20.487-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.559-103.448 1.684-68.338.132-76.424-.125-103.431-1.294zM149.977 1.773c-27.239 1.285-45.843 5.648-62.101 12.018-16.829 6.561-31.095 15.354-45.286 29.604C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.547 1.302 27.231 5.649 45.828 12.019 62.093 6.569 16.83 15.353 31.088 29.611 45.288 14.25 14.201 28.55 22.918 45.404 29.438 16.282 6.295 34.902 10.583 62.15 11.778 27.305 1.203 36.022 1.468 105.521 1.335 69.532-.132 78.25-.439 105.555-1.733 27.239-1.303 45.826-5.665 62.1-12.019 16.829-6.586 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.405 6.304-16.282 10.592-34.903 11.777-62.134 1.195-27.322 1.478-36.048 1.344-105.556-.133-69.516-.447-78.225-1.741-105.523-1.294-27.255-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.079-29.602-45.287-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.305-34.903-10.601-62.15-11.779C333.747.164 325.03-.102 255.506.031c-69.507.133-78.224.431-105.529 1.742z"
                  /></svg
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="flex flex-wrap justify-between border-t pt-5">
      <ul class="text-md flex flex-wrap gap-5 sm:gap-3">
        <li>
          <a class="font-bold uppercase hover:underline" href="/#home">Home</a>
        </li>
        <li>
          <a class="font-bold uppercase hover:underline" href="/programma"
            >Programma</a
          >
        </li>
        <li>
          <a class="font-bold uppercase hover:underline" href="/#practical"
            >Praktisch</a
          >
        </li>
        <li>
          <a class="font-bold uppercase hover:underline" href="/#info">Info</a>
        </li>
        <li>
          <a class="font-bold uppercase hover:underline" href="/#about-us"
            >Ons verhaal</a
          >
        </li>
        <li>
          <a class="font-bold uppercase hover:underline" href="/#contact"
            >Contact</a
          >
        </li>
      </ul>
      <span class="sm:mt-5"
        >&copy;
        <a
          target="_blank"
          aria-label="Visit the website of Lukas Olivier, the developer of this website"
          href="https://lukasolivier.be"
          >Lukas Olivier</a
        ></span
      >
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  background: #bc2b26;
  color: #fff;
}
::selection {
  background: white;
  color: #bc2b26;
}
</style>
