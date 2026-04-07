lucide.createIcons();

const pills = document.querySelectorAll(".pill");

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pills.forEach((item) => item.classList.remove("active"));
    pill.classList.add("active");
  });
});
const filterChips = document.querySelectorAll(".filter-chip");

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
  });
});