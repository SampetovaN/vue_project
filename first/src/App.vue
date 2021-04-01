<!--вливаю изменения-->
<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <div class="w-full my-4"></div>
      <section>
        <div class="flex">
          <div class="max-w-xs">
            <label for="wallet" class="block text-sm font-medium text-gray-700"
              >Тикер</label
            >
            <div class="mt-1 relative rounded-md shadow-md">
              <input
                v-model="hello"
                @keydown.enter="add"
                type="text"
                name="wallet"
                id="wallet"
                class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                placeholder="Например DOGE"
              />
            </div>
          </div>
        </div>
        <button
          @click="add"
          type="button"
          class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <!-- Heroicon name: solid/mail -->
          <svg
            class="-ml-0.5 mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path
              d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            ></path>
          </svg>
          Добавить
        </button>
      </section>
      <template v-if="tickers.length">
        <hr class="w-full border-t border-gray-600 my-4" />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            v-for="(t, inx) in tickers"
            :key="t"
            class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
          >
            <div class="px-4 py-5 sm:p-6 text-center">
              <dt class="text-sm font-medium text-gray-500 truncate">
                {{ t.name }}
              </dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900">
                {{ t.price }}
              </dd>
            </div>
            <div class="w-full border-t border-gray-200"></div>
            <button
              @click="del(inx)"
              class="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#718096"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Удалить
            </button>
          </div>
        </dl>
        <hr class="w-full border-t border-gray-600 my-4" />
      </template>
      <section class="relative">
        <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
          VUE - USD
        </h3>
        <div class="flex items-end border-gray-600 border-b border-l h-64">
          <div class="bg-purple-800 border w-10 h-24"></div>
          <div class="bg-purple-800 border w-10 h-32"></div>
          <div class="bg-purple-800 border w-10 h-48"></div>
          <div class="bg-purple-800 border w-10 h-16"></div>
        </div>
        <button type="button" class="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 511.76 511.76"
            style="enable-background:new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                fill="#718096"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </button>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      hello: "пccccет",
      tickers: this.generateCards()
    };
  },
  methods: {
    add() {
      this.tickers.unshift({ name: this.hello, price: "12345400" });
      this.hello = "";
    },
    del(inx) {
      this.tickers.splice(inx, 1);
    },
    generateCards() {
      let result = [];
      for (let i = 0; i <= 5; ++i) {
        result.push({ name: `12${i}`, price: 1200 + i });
      }
      return result;
    }
  }
};
</script>
<style>
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

strong {
  font-weight: bolder;
}

button,
input,
select {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

template {
  display: none;
}

dl,
dd,
h3,
hr {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
}

*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}

hr {
  border-top-width: 1px;
}

input::placeholder {
  color: #a0aec0;
}

button {
  cursor: pointer;
}

h3 {
  font-size: inherit;
  font-weight: inherit;
}

button,
input,
select {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

svg {
  display: block;
  vertical-align: middle;
}

[type="text"],
select {
  appearance: none;
  background-color: #fff;
  border-color: #a0aec0;
  border-radius: 0;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1;
}

[type="text"]:focus,
select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty);
  --tw-ring-offset-width: 0;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #3182ce;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  border-color: #3182ce;
}

input::placeholder {
  color: #a0aec0;
  opacity: 1;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a0aec0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  color-adjust: exact;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

.bg-white {
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
}

.bg-gray-100 {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.bg-gray-200 {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.bg-gray-600 {
  --bg-opacity: 1;
  background-color: #718096;
  background-color: rgba(113, 128, 150, var(--bg-opacity));
}

.bg-gray-700 {
  --bg-opacity: 1;
  background-color: #4a5568;
  background-color: rgba(74, 85, 104, var(--bg-opacity));
}

.bg-purple-800 {
  --bg-opacity: 1;
  background-color: #553c9a;
  background-color: rgba(85, 60, 154, var(--bg-opacity));
}

.border-transparent {
  border-color: transparent;
}

.border-gray-200 {
  --border-opacity: 1;
  border-color: #edf2f7;
  border-color: rgba(237, 242, 247, var(--border-opacity));
}

.border-gray-300 {
  --border-opacity: 1;
  border-color: #e2e8f0;
  border-color: rgba(226, 232, 240, var(--border-opacity));
}

.border-gray-500 {
  --border-opacity: 1;
  border-color: #a0aec0;
  border-color: rgba(160, 174, 192, var(--border-opacity));
}

.border-gray-600 {
  --border-opacity: 1;
  border-color: #718096;
  border-color: rgba(113, 128, 150, var(--border-opacity));
}

.border-purple-800 {
  --border-opacity: 1;
  border-color: #553c9a;
  border-color: rgba(85, 60, 154, var(--border-opacity));
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.border-solid {
  border-style: solid;
}

.border-4 {
  border-width: 4px;
}

.border {
  border-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.cursor-pointer {
  cursor: pointer;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.grid {
  display: grid;
}

.flex-col {
  flex-direction: column;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.h-5 {
  height: 1.25rem;
}

.h-6 {
  height: 1.5rem;
}

.h-64 {
  height: 16rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-3xl {
  font-size: 1.875rem;
}

.leading-4 {
  line-height: 1rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.max-w-xs {
  max-width: 20rem;
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.overflow-hidden {
  overflow: hidden;
}

.p-4 {
  padding: 1rem;
}

.p-6 {
  padding: 1.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.pr-10 {
  padding-right: 2.5rem;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.text-center {
  text-align: center;
}

.text-white {
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
}

.text-gray-500 {
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--text-opacity));
}

.text-gray-600 {
  --text-opacity: 1;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
}

.text-gray-700 {
  --text-opacity: 1;
  color: #4a5568;
  color: rgba(74, 85, 104, var(--text-opacity));
}

.text-gray-900 {
  --text-opacity: 1;
  color: #1a202c;
  color: rgba(26, 32, 44, var(--text-opacity));
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.w-5 {
  width: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.w-10 {
  width: 2.5rem;
}

.w-full {
  width: 100%;
}

.gap-5 {
  grid-gap: 1.25rem;
  gap: 1.25rem;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.transition-all {
  transition-property: all;
}

.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
}

.duration-300 {
  transition-duration: 300ms;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
