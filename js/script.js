const text = "Selamat datang di situs kami!";
const typingElement = document.getElementById("typing");

// Set teks ke elemen
typingElement.textContent = text;

// Hitung jumlah karakter
const charCount = text.length;

// Buat style dinamis
const style = document.createElement("style");
style.innerHTML = `
.typing-container {
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #000;
  width: 0;
  animation: typing ${charCount * 0.15}s steps(${charCount}, end) forwards, blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black }
}
`;
document.head.appendChild(style);


