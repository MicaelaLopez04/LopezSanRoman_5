 const btnFiltrar = document.getElementById("btn_filtrar");
  const contenedor = document.getElementById("contenedor_filtros");
  const botones = document.querySelectorAll(".btn_toggle");

  btnFiltrar?.addEventListener("click", () => {
    contenedor.style.display = contenedor.style.display === "none" ? "block" : "none";
  });

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const select = document.getElementById(btn.dataset.target);
      const isVisible = select.style.display === "block";
      // Cierra todos antes de abrir uno
      document.querySelectorAll(".filtros_mobile select").forEach(s => s.style.display = "none");
      select.style.display = isVisible ? "none" : "block";
    });
  });