export default function StatCard(StatTitle, StatValue, StatSubtext) {

  return (
    <article class="card-stat">
      <h3 class="card-stat__title">{StatTitle ? StatTitle : '<span class="badge badge-soft badge-content">ไม่พบข้อมูล</span>'}</h3>
      <p class="card-stat__value">{StatTitle ? StatValue : '<span class="badge badge-soft badge-content">ไม่พบข้อมูล</span>'}</p>
      <p class="card-stat__subtext badge badge-soft badge-success">{StatTitle ? StatSubtext : '<span class="badge badge-soft badge-content">ไม่พบข้อมูล</span>'}</p>
    </article>
  );

};
