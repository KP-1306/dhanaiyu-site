
export const metadata = { title: "About — DhanAIyu" };
export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="h1">Less waiting. More caring.</h1>
        <p className="sub">We built DhanAIyu after seeing families lose hours in clinic queues. Our name nods to Dhanvantari—technology that respects time, privacy, and care.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {title:'Mission', body:'Make healthcare visits predictable and humane with simple, trustworthy AI‑powered software.'},
            {title:'Values', body:'Reliability • Empathy • Privacy • Simplicity • Accountability'},
            {title:'Team', body:'Co‑founders: Arti Bisht, Kamal Bisht • Advisor: KP'},
          ].map((c,i)=> (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-slate-700">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
