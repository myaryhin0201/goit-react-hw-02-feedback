(this.webpackJsonpfeedback = this.webpackJsonpfeedback || []).push([
  [0],
  {
    27: function (t, e, a) {},
    28: function (t, e, a) {
      'use strict';
      a.r(e);
      var n = a(0),
        i = a.n(n),
        c = a(11),
        s = a.n(c),
        r = a(5),
        o = a(9),
        l = a(13),
        d = a(3),
        b = Object(d.a)({
          button: {
            width: '150px',
            padding: '10px 0',
            border: '0',
            fontSize: '20px',
            borderRadius: '10px',
            '&:hover, &:focus': { backgroundColor: 'aqua', outline: 'none' },
            '&::first-letter': { textTransform: 'uppercase' },
          },
          good: { backgroundColor: 'lawngreen' },
          bad: { backgroundColor: 'red' },
          neutral: { backgroundColor: 'orange' },
          FeedbackOptions__list: { display: 'flex', justifyContent: 'center' },
          FeedbackOptions__item: {
            '&:not(:last-child)': { marginRight: '10px' },
          },
        }),
        u = a(1),
        j = function (t) {
          var e = t.options,
            a = t.onLeaveFeedback,
            n = b();
          return Object(u.jsx)('ul', {
            className: n.FeedbackOptions__list,
            children: e.map(function (t) {
              return Object(u.jsx)(
                'li',
                {
                  className: n.FeedbackOptions__item,
                  children: Object(u.jsx)('button', {
                    type: 'button',
                    className: ''.concat(n.button, ' ').concat(n[t]),
                    onClick: a,
                    children: t,
                  }),
                },
                t,
              );
            }),
          });
        },
        g = Object(d.a)({
          Feedback: {
            textAlign: 'center',
            marginBottom: '20px',
            paddingTop: '20px',
          },
          Statistics: { textAlign: 'center' },
          LeaveFeedback: {
            backgroundImage:
              'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        }),
        x = function (t) {
          var e = t.title,
            a = t.children,
            n = t.classname,
            i = g();
          return Object(u.jsxs)('div', {
            className: i[n],
            children: [Object(u.jsx)('h1', { children: e }), a],
          });
        };
      x.defaultProps = { title: '', classname: '' };
      var p = x,
        m = Object(d.a)({
          statistics__list: {
            width: '450px',
            margin: '0 auto',
            textAlign: 'left',
            backgroundColor: 'orchid',
            padding: '10px 10px',
            borderRadius: '10px',
          },
          statistics__list__item: {
            fontSize: '20px',
            fontWeight: 'bold',
            '&:not(:last-child)': { marginBottom: '5px' },
          },
        }),
        O = function (t) {
          var e = t.good,
            a = t.neutral,
            n = t.bad,
            i = t.total,
            c = t.positivePercentage,
            s = m();
          return Object(u.jsxs)('ul', {
            className: s.statistics__list,
            children: [
              Object(u.jsxs)('li', {
                className: s.statistics__list__item,
                children: ['Good: ', e],
              }),
              Object(u.jsxs)('li', {
                className: s.statistics__list__item,
                children: ['Neutral: ', a],
              }),
              Object(u.jsxs)('li', {
                className: s.statistics__list__item,
                children: ['Bad: ', n],
              }),
              Object(u.jsxs)('li', {
                className: s.statistics__list__item,
                children: ['Total: ', i()],
              }),
              Object(u.jsxs)('li', {
                className: s.statistics__list__item,
                children: ['Positive feedback: ', c(), '%'],
              }),
            ],
          });
        };
      O.defaultTypes = { good: 0, neutral: 0, bad: 0 };
      var f = O,
        h = Object(d.a)({
          Notification: {
            fontSize: '50px',
            fontWeight: 'bold',
            backgroundImage:
              'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        }),
        _ = function (t) {
          var e = t.message,
            a = h();
          return Object(u.jsx)('span', {
            className: a.Notification,
            children: e,
          });
        };
      _.defaultProps = { message: '' };
      var k = _,
        v = function () {
          var t = Object(n.useState)({ good: 0, neutral: 0, bad: 0 }),
            e = Object(l.a)(t, 2),
            a = e[0],
            i = e[1],
            c = a.good,
            s = a.neutral,
            d = a.bad,
            b = function () {
              return Object.values(a).reduce(function (t, e) {
                return t + e;
              }, 0);
            };
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(p, {
                title: 'Please leave feedback',
                classname: 'Feedback',
                children: Object(u.jsx)(j, {
                  options: Object.keys(a),
                  onLeaveFeedback: function (t) {
                    var e = t.target.textContent;
                    i(function (t) {
                      return Object(o.a)(
                        Object(o.a)({}, t),
                        {},
                        Object(r.a)({}, e, a[e] + 1),
                      );
                    }),
                      t.target.blur();
                  },
                }),
              }),
              Object(u.jsx)(p, {
                title: 'Statistics',
                classname: 'Statistics',
                children: b()
                  ? Object(u.jsx)(f, {
                      good: c,
                      neutral: s,
                      bad: d,
                      total: b,
                      positivePercentage: function () {
                        return Math.round(((100 * c) / b()) * 10) / 10;
                      },
                    })
                  : Object(u.jsx)(k, { message: 'No feedback given' }),
              }),
            ],
          });
        },
        N = Object(d.a)({
          Container: {
            maxWidth: '1700px',
            margin: '0 auto',
            padding: '0 15px',
            '& h1': { display: 'block', marginBottom: '15px' },
          },
        }),
        C = function (t) {
          var e = t.children,
            a = N();
          return Object(u.jsx)('div', { className: a.Container, children: e });
        },
        F = function (t) {
          var e = t.children;
          return Object(u.jsx)(C, { children: e });
        };
      var y = function () {
        return Object(u.jsx)(F, { children: Object(u.jsx)(v, {}) });
      };
      a(26), a(27);
      s.a.render(
        Object(u.jsx)(i.a.StrictMode, { children: Object(u.jsx)(y, {}) }),
        document.getElementById('root'),
      );
    },
  },
  [[28, 1, 2]],
]);
//# sourceMappingURL=main.f56f635d.chunk.js.map
