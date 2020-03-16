
<div id="app"></div>

<script src="https://unpkg.com/bx24@latest/lib/index.js"></script>
<script>
var bx24 = new BX24();
BX24.init(() => {
  for (let i = 0; i < 1000 / 50; i++) {
    BX24.callMethod(
      'crm.deal.list',
      {
        order: {ID: 'DESC'},
        select: ['*', 'UF_*'],
        start: i * 50,
      },
      (response) => {
        if (response.error()) {
          return alert(response.error());
        }

        for (const item of response.data()) {
          BX24.callMethod(
            'crm.company.get', 
            {
              id: item.COMPANY_ID
            }, 
            (response) => {
              let company;
              if (!response.error() && !!response.data()) {
                company = response.data(); 
              }

              const app = document.getElementById('app');

              let ul = document.getElementById(`app_ul_${!!company ? company.ID: 0}`);
              if (!ul) {
                ul = document.createElement('UL');
                ul.id = `app_ul_${!!company ? company.ID: 0}`;
                app.appendChild(ul);

                const li = document.createElement("LI");
                const b = document.createElement("B");
                const text = document.createTextNode(
                    `Company #${!!company ? company.ID: 0}`
                );

                ul.appendChild(li);
                li.appendChild(b);
                b.appendChild(text);
              }

              const li = document.createElement("LI");
              const text = document.createTextNode(
                `[${item.ID}] ${item.TITLE}`
              );

              ul.appendChild(li);
              li.appendChild(text);
            }
          );
        }
      }
    );
  }
});
</script>
