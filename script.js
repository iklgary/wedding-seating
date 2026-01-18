let guests = [];
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");

// Load guest list
fetch("guests.json")
  .then(res => res.json())
  .then(data => guests = data);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  suggestions.innerHTML = "";
  result.innerHTML = "";

  if (!value) return;

  const matches = guests.filter(g =>
    g.name.toLowerCase().includes(value)
  );

  matches.slice(0, 5).forEach(guest => {
    const li = document.createElement("li");
    li.textContent = guest.name;

    li.onclick = () => {
      search.value = guest.name;
      suggestions.innerHTML = "";
      result.innerHTML = `✨ Your table number is <strong>${guest.table}</strong>`;
    };

    suggestions.appendChild(li);
  });
});