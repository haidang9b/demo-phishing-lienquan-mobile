!(function () {
  var e = {
      1909: function (e, n, i) {
        "use strict";
        var t = i(6584),
          a = (i(4609), i(5666), i(9748)),
          o = i(1439),
          r = i(6401),
          d = i(6552),
          s = i(6829);
        const c = "application/msgpack";
        var l,
          u = { language: "vi", graphql: { endpoint: "/graphql" } };
        const m = ((e) => {
          let {
            uri: n = "/graphql",
            includeExtensions: i,
            useGETForQueries: t,
            ...a
          } = e;
          const l = {
            http: { includeExtensions: i },
            options: a.fetchOptions,
            credentials: a.credentials,
            headers: { "content-type": c, ...a.headers },
          };
          return new s.ApolloLink((e) => {
            var i;
            const t = (0, s.selectURI)(e, n),
              a = e.getContext(),
              u = a.headers,
              m = {
                http: a.http,
                options: a.fetchOptions,
                credentials: a.credentials,
                headers: u,
              },
              { options: f, body: h } = (0, s.selectHttpOptionsAndBody)(
                e,
                s.fallbackHttpConfig,
                l,
                m
              );
            if (
              (null == (i = f.headers["content-type"])
                ? void 0
                : i.slice(0, c.length)) === c
            ) {
              const { query: e, variables: n, operationName: i } = h;
              f.body = (0, r.c)([e, n, i]);
            } else f.body = JSON.stringify(h);
            return new o.y$(async (n) => {
              try {
                const i = await fetch(t, f);
                let a;
                e.setContext({ response: i });
                const o = i.headers.get("Content-Type");
                if ((null == o ? void 0 : o.slice(0, c.length)) === c) {
                  const e = await i.blob();
                  a = (0, d.J)(
                    await ((e) =>
                      new Promise((n, i) => {
                        const t = new FileReader();
                        (t.onerror = i),
                          (t.onload = (e) => n(e.target.result)),
                          t.readAsArrayBuffer(e);
                      }))(e)
                  );
                } else a = await i.json();
                n.next(a), n.complete();
              } catch (e) {
                if ("AbortError" === e.name) return;
                e.result &&
                  e.result.errors &&
                  e.result.data &&
                  n.next(e.result),
                  n.error(e);
              }
              return () => {};
            });
          });
        })({
          uri: null == u || null == (l = u.graphql) ? void 0 : l.endpoint,
          credentials: "include",
        });
        var f = new o.fe({ link: m, cache: new o.h4() }),
          h = i(3824),
          v = ({ children: e }) => {
            const { loading: n, data: { user: i = {} } = {} } = (0, s.useQuery)(
              h.getUser
            );
            return (
              (0, a.useEffect)(() => {
                const e = ((e, n = window.location.href) => {
                  e = e.replace(/[\[\]]/g, "\\$&");
                  let i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
                  return i
                    ? i[2]
                      ? decodeURIComponent(i[2].replace(/\+/g, " "))
                      : ""
                    : null;
                })("access_token");
                n ||
                  i.id ||
                  !e ||
                  (window.location.href =
                    "/login/callback?access_token=" + e);
              }, [n]),
              (0, t.tZ)(t.HY, {
                children: (0, t.tZ)("main", {
                  className: "body",
                  id: "body",
                  children: e,
                }),
              })
            );
          },
          p = () => (0, t.tZ)("div", {});
        function k() {
          const e = ((n = ["{meta}"]), i || (i = n.slice(0)), (n.raw = i), n);
          var n, i;
          return (
            (k = function () {
              return e;
            }),
            e
          );
        }
        const g = (0, o.Ps)(k()),
          S = {};
        var b = "https://ngame1137.onelink.me/jFUN/GiftcodeAIC2020",
          N = i(2258),
          y = i(9501),
          w = i(6455),
          Z = i.n(w),
          E = i(7484);
        function C(e, n = "Th??ng b??o", i = () => {}) {
          let t = "";
          switch (e) {
            case "Unauthorized":
              t = "Vui l??ng ????ng nh???p ????? tham gia s??? ki???n!";
              break;
            case "DontHaveGameId":
              t = "B???n ch??a t???o t??i kho???n!";
              break;
            case "EventEnded":
              t = "S??? ki???n ???? k???t th??c!";
              break;
            case "MissionInvalid":
              t = "Nhi???m v??? kh??ng h???p l???!";
              break;
            case "MissionClaimed":
              t = "B???n ???? ho??n th??nh nhi???m v??? n??y!";
              break;
            case "CodeInvalid":
              t = "Giftcode kh??ng ch??nh x??c!";
              break;
            case "CodeClaimed":
              t = "B???n ???? nh???p Giftcode n??y!";
              break;
            case "CodeEnded":
              t = "Th???i gian nh???p Giftcode ???? k???t th??c!";
              break;
            case "CodeNotStart":
              t = "Th???i gian nh???p Giftcode ch??a b???t ?????u!";
              break;
            case "CodeLimited":
              t =
                "S??? l?????ng Giftcode gi???i h???n n??y ???? ???????c nh???p h???t. Nh??? theo d??i Livestream ????? nh???n th??m c??c Giftcode kh??c nh??!";
              break;
            case "Processing":
              t =
                "Y??u c???u c???a b???n ??ang ???????c th???c hi???n. Vui l??ng ?????i trong gi??y l??t!";
              break;
            case "AlreadyConfirmedInfo":
              t = "B???n ???? nh???p th??ng tin c?? nh??n!";
              break;
            case "NotFinishedYet":
              t = "B???n ch??a ho??n th??nh nhi???m v???!";
              break;
            default:
              t = "Kh??ng th??? th???c hi???n t??c v??? n??y, vui l??ng th??? l???i sau!";
          }
          return Z().fire({
            title: '<span class="popup-alert__title">' + n + "</span>",
            html:
              '\n      <p class="popup-alert__message">' +
              t +
              "</p>\n      " +
              ("Unauthorized" === e
                ? '\n        <div class="popup-alert__actions">\n          <a href="/facebook" title="Facebook">\n            <img src="./images/icon-facebook.png" alt="Facebook"/>\n          </a>\n          <a href="/login" title="Garena">\n            <img src="./images/icon-garena.png" alt="Garena"/>\n          </a>\n        </div>\n      '
                : "") +
              "\n    ",
            showConfirmButton: !1,
            showCancelButton: !1,
            showCloseButton: !0,
            closeButtonHtml: '<img src="./images/icon-close.png" alt="????ng"/>',
            target: "body",
            onClose: () => {
              i();
            },
            customClass: {
              popup:
                "popup-alert popup-error " + (n.length ? "" : "popup-no-title"),
            },
          });
        }
        function D(e, n = {}, i = "Ch??c m???ng", t = () => {}) {
          let a = "";
          switch (e) {
            case "receive_gift":
              a =
                "Ch??c m???ng b???n ???? nh???n <span>" +
                n.name +
                "</span>.<br/>Ph???n th?????ng s??? ???????c g???i v??o h??m th?? ingame";
              break;
            case "confirm_info_success":
              a = "X??c nh???n th??ng tin th??nh c??ng!";
              break;
            default:
              a = "Th???c hi???n thao t??c th??nh c??ng!";
          }
          return Z().fire({
            title: '<span class="popup-alert__title">' + i + "</span>",
            html:
              "\n      " +
              (n.image
                ? '<div class="popup-alert__image"><img src="' +
                  n.image +
                  '"/></div>'
                : "") +
              '\n      <p class="popup-alert__message">' +
              a +
              "</p>\n    ",
            showConfirmButton: !0,
            showCancelButton: !1,
            showCloseButton: !0,
            confirmButtonText: "X??c nh???n",
            closeButtonHtml: '<img src="./images/icon-close.png" alt="????ng"/>',
            target: "body",
            onClose: () => {
              t();
            },
            customClass: {
              popup:
                "popup-alert popup-success " +
                (i.length ? "" : "popup-no-title"),
            },
          });
        }
        var _ = i(7355),
          F = ({ onClose: e = () => {} }) => {
            const [n, o] = (0, a.useState)(!1),
              [r, d] = (0, a.useState)({
                fullname: "",
                phone: "",
                address: "",
                facebook: "",
              }),
              { loading: c, data: { userInfo: l = {} } = {} } = (0, s.useQuery)(
                _.getUserInfo
              ),
              [u] = (0, s.useMutation)(i(1306));
            return (
              (0, a.useEffect)(() => {
                !c &&
                  l.id &&
                  (d({
                    fullname: l.fullname || "",
                    phone: l.phone || "",
                    address: l.address || "",
                    facebook: l.facebook || "",
                  }),
                  l.fullname && (C("AlreadyConfirmedInfo"), e()));
              }, [c]),
              c || !l.id || l.fullname
                ? (0, t.tZ)(t.HY, {})
                : (0, t.tZ)(N.J9, {
                    enableReinitialize: !0,
                    validationSchema: y
                      .Ry()
                      .shape({
                        fullname: y.Z_().required("Vui l??ng nh???p H??? T??n"),
                        phone: y.Z_().required("Vui l??ng nh???p S??? ??i???n Tho???i"),
                        address: y.Z_().required("Vui l??ng nh???p ?????a Ch???"),
                        facebook: y
                          .Z_()
                          .required("Vui l??ng nh???p Link Facebook"),
                      }),
                    initialValues: r,
                    onSubmit: (i) => {
                      return (
                        (t = i),
                        void (
                          n ||
                          (o(!0),
                          u({ variables: { data: t } })
                            .then((n) => {
                              o(!1), D("confirm_info_success"), e();
                            })
                            .catch((e) => {
                              o(!1), C(e.graphQLErrors[0].message);
                            }))
                        )
                      );
                      var t;
                    },
                    children: ({
                      values: i,
                      errors: a,
                      touched: o,
                      handleChange: r,
                      handleBlur: d,
                      handleSubmit: s,
                      setFieldValue: c,
                      isSubmitting: l,
                    }) =>
                      (0, t.BX)("form", {
                        action: "",
                        className: "user-info",
                        onSubmit: s,
                        children: [
                          (0, t.tZ)("a", {
                            href: "#",
                            className: "user-info__close",
                            title: "????ng",
                            onClick: (n) =>
                              ((n) => {
                                n.preventDefault(), e();
                              })(n),
                            children: (0, t.tZ)("img", {
                              src: "./images/icon-cancel.png",
                              alt: "????ng",
                            }),
                          }),
                          (0, t.BX)("div", {
                            className: "user-info__title",
                            children: [
                              "Nh???p th??ng tin nh???n qu?? ????? c??",
                              (0, t.tZ)("br", {}),
                              "c?? h???i nh???n c??c ph???n qu?? hi???n v???t",
                            ],
                          }),
                          (0, t.BX)("div", {
                            className: "user-info__inputs",
                            children: [
                              (0, t.BX)("div", {
                                className: "form-group",
                                children: [
                                  (0, t.tZ)("input", {
                                    type: "text",
                                    placeholder: "H??? v?? t??n...",
                                    className:
                                      "form-control " +
                                      (a.fullname && o.fullname
                                        ? "is-invalid"
                                        : ""),
                                    name: "fullname",
                                    value: i.fullname,
                                    onChange: r,
                                    onBlur: d,
                                  }),
                                  a.fullname &&
                                    o.fullname &&
                                    (0, t.tZ)("div", {
                                      className: "invalid-feedback",
                                      children: a.fullname,
                                    }),
                                ],
                              }),
                              (0, t.BX)("div", {
                                className: "form-group",
                                children: [
                                  (0, t.tZ)("input", {
                                    type: "text",
                                    placeholder: "S??? ??i???n tho???i...",
                                    className:
                                      "form-control " +
                                      (a.phone && o.phone ? "is-invalid" : ""),
                                    name: "phone",
                                    value: i.phone,
                                    onChange: r,
                                    onBlur: d,
                                  }),
                                  a.phone &&
                                    o.phone &&
                                    (0, t.tZ)("div", {
                                      className: "invalid-feedback",
                                      children: a.phone,
                                    }),
                                ],
                              }),
                              (0, t.BX)("div", {
                                className: "form-group",
                                children: [
                                  (0, t.tZ)("input", {
                                    type: "text",
                                    placeholder: "?????a ch???...",
                                    className:
                                      "form-control " +
                                      (a.address && o.address
                                        ? "is-invalid"
                                        : ""),
                                    name: "address",
                                    value: i.address,
                                    onChange: r,
                                    onBlur: d,
                                  }),
                                  a.address &&
                                    o.address &&
                                    (0, t.tZ)("div", {
                                      className: "invalid-feedback",
                                      children: a.address,
                                    }),
                                ],
                              }),
                              (0, t.BX)("div", {
                                className: "form-group",
                                children: [
                                  (0, t.tZ)("input", {
                                    type: "text",
                                    placeholder: "Link facebook...",
                                    className:
                                      "form-control " +
                                      (a.facebook && o.facebook
                                        ? "is-invalid"
                                        : ""),
                                    name: "facebook",
                                    value: i.facebook,
                                    onChange: r,
                                    onBlur: d,
                                  }),
                                  a.facebook &&
                                    o.facebook &&
                                    (0, t.tZ)("div", {
                                      className: "invalid-feedback",
                                      children: a.facebook,
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.tZ)("div", {
                            className: "user-info__submit",
                            children: (0, t.tZ)("button", {
                              type: "submit",
                              disabled: n,
                              title: "X??c nh???n",
                              children: "X??c nh???n",
                            }),
                          }),
                        ],
                      }),
                  })
            );
          },
          x = i(3253),
          O = i.n(x),
          I = i(6370);
        O().setAppElement("#main");
        var B = ({
            isOpen: e = !1,
            children: n = null,
            title: i = "",
            className: a = "",
            hideCloseButton: o = !1,
            theme: r = "default",
            outsideClose: d = !0,
            scrollbar: s = !1,
            onClose: c = () => {},
          }) => {
            const l = (0, t.tZ)(t.HY, {
              children:
                n &&
                (0, t.tZ)("div", { className: "modal-content", children: n }),
            });
            return (0, t.tZ)(O(), {
              isOpen: e,
              onAfterOpen: () => {},
              onRequestClose: (e) => {
                d && c(e);
              },
              className: "modal-select modal-theme-" + r + " " + a,
              children: (0, t.BX)("div", {
                className: "modal-wrapper",
                children: [
                  i &&
                    (0, t.tZ)("h3", { className: "modal-title", children: i }),
                  (0, t.tZ)("div", {
                    className: "modal-body",
                    children: s
                      ? (0, t.tZ)(I.ZP, { noScrollX: !0, children: l })
                      : (0, t.tZ)(t.HY, { children: l }),
                  }),
                  !o &&
                    (0, t.tZ)("a", {
                      onClick: (e) =>
                        ((e) => {
                          e.preventDefault(), c(e);
                        })(e),
                      className: "close",
                      "data-dismiss": "modal",
                      "aria-label": "Close",
                      title: "????ng",
                      children: (0, t.tZ)("img", {
                        src: "./images/icon-close.png",
                        alt: "????ng",
                      }),
                    }),
                ],
              }),
            });
          },
          T = i(3527),
          U = ({ align: e = "center", theme: n = "light" }) =>
            (0, t.tZ)("div", {
              className: "spinner text-" + e + " spinner-" + n,
              children: (0, t.tZ)("div", {
                className: "loadingio-spinner-spin-e8oyp2k9pg4",
                children: (0, t.BX)("div", {
                  className: "ldio-w7vp5azzy7",
                  children: [
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                    (0, t.tZ)("div", { children: (0, t.tZ)("div", {}) }),
                  ],
                }),
              }),
            }),
          q = ({ isOpen: e = !1, onClose: n = () => {} }) => {
            const { loading: i, data: { rule: a = "" } = {} } = (0, s.useQuery)(
              T.getRule
            );
            return (0, t.tZ)(t.HY, {
              children:
                e &&
                (0, t.tZ)(B, {
                  theme: "default",
                  isOpen: e,
                  title: "Th??? l???",
                  scrollbar: !0,
                  onClose: (e) =>
                    ((e) => {
                      e.preventDefault(), n(e);
                    })(e),
                  children: (0, t.tZ)("div", {
                    className: "rules",
                    children: i
                      ? (0, t.tZ)(U, {})
                      : (0, t.tZ)("div", {
                          className: "rules__content",
                          dangerouslySetInnerHTML: { __html: a },
                        }),
                  }),
                }),
            });
          },
          V = i(9873),
          H = i(9105),
          X = i(9705),
          M = i(4855),
          Q = ({
            history: {
              type: e = null,
              content: n = null,
              code: i = "",
              createdAt: a = null,
            } = {},
          }) => {
            const { loading: o, data: { item: r = {} } = {} } = (0,
              s.useQuery)(H.getItem, {
                skip: !(1 === e && n),
                variables: { id: n },
              }),
              { loading: d, data: { mission: c = {} } = {} } = (0,
              s.useQuery)(X.getMission, {
                skip: !(0 === e && n),
                variables: { id: n },
              });
            return o || d
              ? (0, t.tZ)(t.HY, {})
              : (0, t.BX)("tr", {
                  children: [
                    (0, t.tZ)("td", {
                      children: ((l = a), E(l).format("HH:mm DD/MM/YYYY")),
                    }),
                    (0, t.BX)("td", {
                      children: [
                        0 === e && c && c.name,
                        1 === e && "Nh???p Giftcode " + i,
                      ],
                    }),
                    (0, t.BX)("td", {
                      children: [
                        0 === e &&
                          (0, t.BX)(t.HY, {
                            children: [
                              i,
                              (0, t.tZ)(M.CopyToClipboard, {
                                text: i,
                                onCopy: () => {},
                                children: (0, t.tZ)("a", {
                                  href: "#",
                                  onClick: (e) => e.preventDefault(),
                                  children: (0, t.tZ)("img", {
                                    src: "./images/icon-copy.png",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        1 === e && r && r.name,
                      ],
                    }),
                  ],
                });
            var l;
          },
          G = ({ isOpen: e = !1, onClose: n = () => {} }) => {
            const { loading: i, data: { histories: a = [] } = {} } = (0,
            s.useQuery)(V.getHistories, {
              fetchPolicy: "network-only",
              variables: { limit: 255, offset: 0 },
            });
            return (0, t.tZ)(t.HY, {
              children:
                e &&
                (0, t.tZ)(B, {
                  theme: "default",
                  isOpen: e,
                  title: "L???ch s???",
                  scrollbar: !0,
                  className: "popup-histories",
                  onClose: (e) =>
                    ((e) => {
                      e.preventDefault(), n(e);
                    })(e),
                  children: (0, t.tZ)("div", {
                    className: "histories",
                    children: i
                      ? (0, t.tZ)(U, {})
                      : (0, t.BX)("table", {
                          className: "histories__table",
                          children: [
                            (0, t.tZ)("thead", {
                              children: (0, t.BX)("tr", {
                                children: [
                                  (0, t.tZ)("th", { children: "Th???i gian" }),
                                  (0, t.tZ)("th", { children: "N???i dung" }),
                                  (0, t.tZ)("th", { children: "???? nh???n" }),
                                ],
                              }),
                            }),
                            (0, t.tZ)("tbody", {
                              children:
                                a.length > 0
                                  ? (0, t.tZ)(t.HY, {
                                      children: a.map((e, n) =>
                                        (0, t.tZ)(Q, { history: e }, n)
                                      ),
                                    })
                                  : (0, t.tZ)("tr", {
                                      children: (0, t.tZ)("td", {
                                        colSpan: "3",
                                        children: (0, t.tZ)("em", {
                                          children: "Ch??a c?? d??? li???u",
                                        }),
                                      }),
                                    }),
                            }),
                          ],
                        }),
                  }),
                }),
            });
          },
          L = i(3815),
          A = () => {
            const [e, n] = (0, a.useState)(!1),
              [i, o] = (0, a.useState)(!1),
              [r, d] = (0, a.useState)(!1),
              { loading: c, data: { user: l = {} } = {} } = (0, s.useQuery)(
                h.getUser
              ),
              { loading: u, data: { state: m = {} } = {} } = (0, s.useQuery)(
                L.getState
              ),
              f = [
                {
                  name: "Trang ch???",
                  icon: "./images/icon-home.png",
                  active: !0,
                  onClick: () => {},
                },
                {
                  name: "L???ch s???",
                  icon: "./images/icon-histories.png",
                  onClick: () => {
                    l.id ? d(!0) : C("Unauthorized");
                  },
                },
                {
                  name: "Th??? l???",
                  icon: "./images/icon-rules.png",
                  onClick: () => {
                    o(!0);
                  },
                },
                {
                  name: 'Nh???p th??ng tin<span class="pc"> nh???n qu??</span>',
                  icon: "./images/icon-user-info.png",
                  onClick: () => {
                    l.id ? n((e) => !e) : C("Unauthorized");
                  },
                },
              ];
            return c || u
              ? (0, t.tZ)(t.HY, {})
              : (0, t.BX)(t.HY, {
                  children: [
                    (0, t.BX)("header", {
                      className: "header",
                      id: "header",
                      children: [
                        (0, t.tZ)("img", {
                          src: "./images/logo.png",
                          className: "header__logo pc",
                        }),
                        (0, t.tZ)("ul", {
                          className: "header__menu",
                          children: f.map((e, n) =>
                            (0, t.tZ)(
                              "li",
                              {
                                className: e.active ? "active" : "",
                                children: (0, t.BX)("a", {
                                  href: "#",
                                  title: e.name,
                                  onClick: (n) => {
                                    n.preventDefault(), e.onClick(n);
                                  },
                                  children: [
                                    (0, t.tZ)("img", {
                                      src: e.icon,
                                      alt: e.name,
                                      className: "mo",
                                    }),
                                    (0, t.tZ)("span", {
                                      dangerouslySetInnerHTML: {
                                        __html: e.name,
                                      },
                                    }),
                                  ],
                                }),
                              },
                              n
                            )
                          ),
                        }),
                        e &&
                          (0, t.tZ)("div", {
                            className:
                              "header__user-info animate__animated animate__bounceIn",
                            children: (0, t.tZ)(F, {
                              onClose: () => {
                                n(!1);
                              },
                            }),
                          }),
                        l.id && m.id
                          ? (0, t.BX)("div", {
                              className: "header__user",
                              children: [
                                "Xin ch??o,??",
                                (0, t.tZ)("span", {
                                  className: "text-truncate",
                                  children: m.charName || l.name,
                                }),
                                "??|??",
                                (0, t.tZ)("a", {
                                  href: "/login/logout",
                                  children: "??.Xu???t",
                                }),
                              ],
                            })
                          : (0, t.BX)("div", {
                              className: "header__login",
                              children: [
                                (0, t.tZ)("div", {
                                  className: "header__login--text",
                                  children: "????ng Nh???p:",
                                }),
                                (0, t.tZ)("a", {
                                  href: "/facebook",
                                  title: "Facebook",
                                  children: (0, t.tZ)("img", {
                                    src: "./images/icon-facebook.png",
                                    alt: "Facebook",
                                  }),
                                }),
                                (0, t.tZ)("a", {
                                  href: "/login",
                                  title: "Garena",
                                  children: (0, t.tZ)("img", {
                                    src: "./images/icon-garena.png",
                                    alt: "Garena",
                                  }),
                                }),
                              ],
                            }),
                        (0, t.tZ)("a", {
                          href: b,
                          className: "header__join-game mo",
                          title: "V??o Game Ngay",
                          children: "V??o Game Ngay",
                        }),
                        (0, t.tZ)("img", {
                          src: "./images/logos.png",
                          className: "header__logos mo",
                        }),
                      ],
                    }),
                    i && (0, t.tZ)(q, { isOpen: i, onClose: (e) => o(!1) }),
                    r && (0, t.tZ)(G, { isOpen: r, onClose: (e) => d(!1) }),
                  ],
                });
          },
          P = () => {
            const [e, n] = (0, a.useState)(""),
              [o, r] = (0, a.useState)(!1),
              [d, c] = (0, a.useState)(null),
              { loading: l, data: { state: u = {} } = {} } = (0, s.useQuery)(
                L.getState
              ),
              { loading: m, data: { item: f = {} } = {} } = (0,
              s.useQuery)(H.getItem, {
                skip: !d,
                variables: { id: d },
                fetchPolicy: "network-only",
              }),
              [h] = (0, s.useMutation)(i(5076), {
                update(e, { data: n }) {
                  e.writeQuery({
                    query: L.getState,
                    data: { state: n.claimCode.state },
                  });
                },
              });
            return (
              (0, a.useEffect)(() => {
                !m &&
                  f.id &&
                  (D("receive_gift", { name: f.name, image: f.icon }), c(null));
              }, [m]),
              l
                ? (0, t.tZ)(t.HY, {})
                : (0, t.BX)("form", {
                    className: "giftcode",
                    onSubmit: (i) =>
                      ((i) => {
                        i.preventDefault(),
                          u.id
                            ? o ||
                              (e.match(/^[A-Z0-9]{8,16}$/)
                                ? (r(!0),
                                  h({ variables: { code: e } })
                                    .then((e) => {
                                      r(!1), n(""), c(e.data.claimCode.itemId);
                                    })
                                    .catch((e) => {
                                      r(!1), C(e.graphQLErrors[0].message);
                                    }))
                                : C("CodeInvalid"))
                            : C("Unauthorized");
                      })(i),
                    children: [
                      (0, t.tZ)("input", {
                        type: "text",
                        className: "giftcode__input",
                        placeholder: "NH???P GIFTCODE T???I ????Y...",
                        value: e,
                        disabled: o,
                        onChange: (e) => n(e.target.value.toUpperCase()),
                      }),
                      (0, t.tZ)("button", {
                        type: "submit",
                        title: "X??c nh???n",
                        className: "giftcode__submit",
                        disabled: o,
                        children: "X??C NH???N",
                      }),
                    ],
                  })
            );
          },
          Y = i(3828),
          z = ({ code: e = "", isOpen: n = !1, onClose: i = () => {} }) => {
            const [o, r] = (0, a.useState)(!1);
            let d;
            return (
              (0, a.useEffect)(
                () => (
                  o &&
                    (d = setTimeout(() => {
                      r(!1);
                    }, 2e3)),
                  () => {
                    clearTimeout(d);
                  }
                ),
                [o]
              ),
              (0, t.tZ)(t.HY, {
                children:
                  n &&
                  e &&
                  (0, t.tZ)(B, {
                    theme: "default",
                    isOpen: n,
                    title: "Ho??n th??nh nhi???m v??? ?????c bi???t",
                    onClose: (e) =>
                      ((e) => {
                        e.preventDefault(), i(e);
                      })(e),
                    children: (0, t.BX)("div", {
                      className: "receive-giftcode",
                      children: [
                        (0, t.BX)("div", {
                          className: "receive-giftcode__message",
                          children: [
                            "Ch??c m???ng b???n ???? Ho??n th??nh nhi???m v??? ?????c bi???t",
                            (0, t.tZ)("br", {}),
                            "v?? nh???n ???????c giftcode",
                          ],
                        }),
                        (0, t.tZ)("div", {
                          className: "receive-giftcode__code",
                          children: e,
                        }),
                        (0, t.tZ)(M.CopyToClipboard, {
                          text: e,
                          onCopy: () => r(!0),
                          children: (0, t.tZ)("a", {
                            href: "#",
                            className: "receive-giftcode__copy",
                            title: "Sao ch??p giftcode",
                            onClick: (e) => e.preventDefault(),
                            children: o ? "???? sao ch??p" : "Sao ch??p giftcode",
                          }),
                        }),
                      ],
                    }),
                  }),
              })
            );
          },
          $ = () => {
            const [e, n] = (0, a.useState)(!1),
              [o, r] = (0, a.useState)(!1),
              [d, c] = (0, a.useState)(""),
              { loading: l, data: { state: u = {} } = {} } = (0, s.useQuery)(
                L.getState
              ),
              { loading: m, data: { missions: f = [] } = {} } = (0, s.useQuery)(
                Y.getMissions
              ),
              [h] = (0, s.useMutation)(i(610), {
                update(e, { data: n }) {
                  e.writeQuery({
                    query: L.getState,
                    data: { state: n.claimMission.state },
                  });
                },
              }),
              v = (i) => {
                e ||
                  (n(!0),
                  h({ variables: { id: i.id } })
                    .then((e) => {
                      n(!1), r(!0), c(e.data.claimMission.code);
                    })
                    .catch((e) => {
                      n(!1), C(e.graphQLErrors[0].message);
                    }));
              },
              p = (e) => !!(1 & (u.mission >> e.id));
            return m || l
              ? (0, t.tZ)(t.HY, {})
              : (0, t.BX)(t.HY, {
                  children: [
                    (0, t.tZ)("div", {
                      className: "missions",
                      children: f.map((e, n) =>
                        (0, t.tZ)(
                          "a",
                          {
                            href: "#",
                            className:
                              "missions__item " + (p(e) ? "claimed" : ""),
                            onClick: (n) =>
                              ((e, n) => {
                                if ((n.preventDefault(), !u.id))
                                  return void C("Unauthorized");
                                const { id: i, action: t, meta: a } = e;
                                switch (t) {
                                  case 0:
                                    a &&
                                      a.url &&
                                      FB.ui(
                                        { method: "share", href: a.url },
                                        function (n) {
                                          n && !n.error_message
                                            ? v(e)
                                            : C("NotFinishedYet");
                                        }
                                      );
                                    break;
                                  case 1:
                                    break;
                                  case 2:
                                    a && a.url && (window.open(a.url), v(e));
                                }
                              })(e, n),
                            children: (0, t.tZ)("span", { children: e.name }),
                          },
                          n
                        )
                      ),
                    }),
                    o &&
                      d &&
                      (0, t.tZ)(z, {
                        code: d,
                        isOpen: o,
                        onClose: (e) => r(!1),
                      }),
                  ],
                });
          },
          j = () =>
            (0, t.BX)(t.HY, {
              children: [
                (0, t.tZ)(A, {}),
                (0, t.BX)("div", {
                  className: "page-home",
                  children: [
                    (0, t.tZ)("div", {
                      className: "page-home__giftcode",
                      children: (0, t.tZ)(P, {}),
                    }),
                    (0, t.BX)("div", {
                      className: "page-home__left",
                      children: [
                        (0, t.tZ)("div", {
                          className: "page-home__missions",
                          children: (0, t.tZ)($, {}),
                        }),
                        (0, t.tZ)("img", { src: "./images/banner-2.jpg" }),
                      ],
                    }),
                    (0, t.BX)("div", {
                      className: "page-home__right",
                      children: [
                        (0, t.tZ)("img", { src: "./images/banner-2.png" }),
                        (0, t.tZ)("img", { src: "./images/banner-3.png" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
        a.default.render(
          (0, t.tZ)(s.ApolloProvider, {
            client: f,
            children: (0, t.tZ)(
              () => (
                (() => {
                  const e = (0, s.useApolloClient)();
                  (0, a.useEffect)(() => {
                    e.query({ query: g })
                      .then(({ data: { meta: e } }) => {
                        window.fbAsyncInit = function () {
                          FB.init({
                            version: e.fbVer || "v9.0",
                            appId: e.fbAppId,
                            xfbml: !1,
                            status: !1,
                          });
                        };
                        const n = document.createElement("script");
                        (n.async = !0),
                          (n.defer = !0),
                          (n.src =
                            e.fbSdk ||
                            "https://connect.facebook.net/en_US/sdk.js"),
                          (window.dataLayer = window.dataLayer || []),
                          window.dataLayer.push({
                            event: "gtm.js",
                            "gtm.start": new Date().getTime(),
                          });
                        const i = document.createElement("script");
                        (i.async = !0),
                          (i.src =
                            "https://www.googletagmanager.com/gtag/js?id=" +
                            e.gtagId);
                        const t = document.createElement("title");
                        t.innerText = e.title;
                        const a = document.createElement("meta");
                        (a.name = "description"), (a.content = e.description);
                        const o = document.createElement("meta");
                        (o.name = "keywords"), (o.content = e.keywords);
                        const r = document.createElement("link");
                        (r.rel = "icon"),
                          (r.type = "image/png"),
                          (r.href = e.favicon),
                          document.head.appendChild(t),
                          document.head.appendChild(a),
                          document.head.appendChild(r),
                          document.head.appendChild(o),
                          document.head.appendChild(n),
                          document.head.appendChild(i),
                          Object.assign(S, e);
                      })
                      .catch(console.error);
                  }, []);
                })(),
                (0, t.tZ)(a.Suspense, {
                  fallback: (0, t.tZ)(p, {}),
                  children: (0, t.tZ)(v, { children: (0, t.tZ)(j, {}) }),
                })
              ),
              {}
            ),
          }),
          document.getElementById("main")
        );
      },
      5076: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "mutation",
              name: { kind: "Name", value: "doClaimCode" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "code" },
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "String" },
                    },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "claimCode" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "code" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "code" },
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "itemId" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "state" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "id" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "charName" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "code" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "mission" },
                                arguments: [],
                                directives: [],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 150 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "mutation doClaimCode($code: String!) {\n  claimCode(code: $code) {\n    itemId\n    state {\n      id\n      charName\n      code\n      mission\n    }\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.doClaimCode = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.doClaimCode || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "doClaimCode"));
      },
      610: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "mutation",
              name: { kind: "Name", value: "doClaimMission" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "id" },
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "UInt8" },
                    },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "claimMission" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "id" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "id" },
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "code" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "state" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "id" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "charName" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "code" },
                                arguments: [],
                                directives: [],
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "mission" },
                                arguments: [],
                                directives: [],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 147 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "mutation doClaimMission($id: UInt8!) {\n  claimMission(id: $id) {\n    code\n    state {\n      id\n      charName\n      code\n      mission\n    }\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.doClaimMission = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.doClaimMission || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "doClaimMission"));
      },
      1306: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "mutation",
              name: { kind: "Name", value: "doUpdateUserInfo" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "data" },
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "UserData" },
                    },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "updateUserInfo" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "data" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "data" },
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fullname" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "phone" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "address" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "facebook" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 139 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "mutation doUpdateUserInfo($data: UserData!) {\n  updateUserInfo(data: $data) {\n    id\n    fullname\n    phone\n    address\n    facebook\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.doUpdateUserInfo = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t[n] || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "doUpdateUserInfo"));
      },
      9873: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getHistories" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "limit" },
                  },
                  type: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "UInt8" },
                  },
                  directives: [],
                },
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "offset" },
                  },
                  type: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "UInt32" },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "histories" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "limit" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "limit" },
                        },
                      },
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "offset" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "offset" },
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "type" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "content" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "code" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "createdAt" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 156 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getHistories($limit: UInt8, $offset: UInt32) {\n  histories(limit: $limit, offset: $offset) {\n    id\n    type\n    content\n    code\n    createdAt\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getHistories = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getHistories || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getHistories"));
      },
      9105: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getItem" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "id" },
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "UInt32" },
                    },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "item" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "id" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "id" },
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "icon" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 79 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getItem($id: UInt32!) {\n  item(id: $id) {\n    id\n    name\n    icon\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getItem = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getItem || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getItem"));
      },
      9705: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getMission" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "id" },
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "UInt8" },
                    },
                  },
                  directives: [],
                },
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "mission" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "id" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "id" },
                        },
                      },
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "action" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "meta" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 96 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getMission($id: UInt8!) {\n  mission (id: $id) {\n    id\n    name\n    action\n    meta\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getMission = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getMission || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getMission"));
      },
      3828: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getMissions" },
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "missions" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "action" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "meta" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 75 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getMissions {\n  missions {\n    id\n    name\n    action\n    meta\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getMissions = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getMissions || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getMissions"));
      },
      3527: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getRule" },
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "rule" },
                    arguments: [],
                    directives: [],
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 25 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body: "query getRule {\n  rule\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getRule = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getRule || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getRule"));
      },
      3815: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getState" },
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "state" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "charName" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "code" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "mission" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 74 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getState {\n  state {\n    id\n    charName\n    code\n    mission\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getState = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getState || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getState"));
      },
      3824: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getUser" },
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "user" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "avatar" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 58 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getUser {\n  user {\n    id\n    name\n    avatar\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getUser = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getUser || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getUser"));
      },
      7355: function (e) {
        var n = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getUserInfo" },
              variableDefinitions: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "userInfo" },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "fullname" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "phone" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "address" },
                          arguments: [],
                          directives: [],
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "facebook" },
                          arguments: [],
                          directives: [],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          loc: { start: 0, end: 94 },
        };
        function i(e, n) {
          if ("FragmentSpread" === e.kind) n.add(e.name.value);
          else if ("VariableDefinition" === e.kind) {
            var t = e.type;
            "NamedType" === t.kind && n.add(t.name.value);
          }
          e.selectionSet &&
            e.selectionSet.selections.forEach(function (e) {
              i(e, n);
            }),
            e.variableDefinitions &&
              e.variableDefinitions.forEach(function (e) {
                i(e, n);
              }),
            e.definitions &&
              e.definitions.forEach(function (e) {
                i(e, n);
              });
        }
        n.loc.source = {
          body:
            "query getUserInfo {\n  userInfo {\n    id\n    fullname\n    phone\n    address\n    facebook\n  }\n}\n",
          name: "GraphQL request",
          locationOffset: { line: 1, column: 1 },
        };
        var t = {};
        function a(e, n) {
          for (var i = 0; i < e.definitions.length; i++) {
            var t = e.definitions[i];
            if (t.name && t.name.value == n) return t;
          }
        }
        n.definitions.forEach(function (e) {
          if (e.name) {
            var n = new Set();
            i(e, n), (t[e.name.value] = n);
          }
        }),
          (e.exports = n),
          (e.exports.getUserInfo = (function (e, n) {
            var i = { kind: e.kind, definitions: [a(e, n)] };
            e.hasOwnProperty("loc") && (i.loc = e.loc);
            var o = t.getUserInfo || new Set(),
              r = new Set(),
              d = new Set();
            for (
              o.forEach(function (e) {
                d.add(e);
              });
              d.size > 0;

            ) {
              var s = d;
              (d = new Set()),
                s.forEach(function (e) {
                  r.has(e) ||
                    (r.add(e),
                    (t[e] || new Set()).forEach(function (e) {
                      d.add(e);
                    }));
                });
            }
            return (
              r.forEach(function (n) {
                var t = a(e, n);
                t && i.definitions.push(t);
              }),
              i
            );
          })(n, "getUserInfo"));
      },
    },
    n = {};
  function i(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { id: t, loaded: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.loaded = !0), a.exports;
  }
  (i.m = e),
    (i.x = function () {}),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(n, { a: n }), n;
    }),
    (i.d = function (e, n) {
      for (var t in n)
        i.o(n, t) &&
          !i.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (function () {
      var e = { 763: 0 },
        n = [[1909, 736]],
        t = function () {},
        a = function (a, o) {
          for (
            var r, d, s = o[0], c = o[1], l = o[2], u = o[3], m = 0, f = [];
            m < s.length;
            m++
          )
            (d = s[m]), i.o(e, d) && e[d] && f.push(e[d][0]), (e[d] = 0);
          for (r in c) i.o(c, r) && (i.m[r] = c[r]);
          for (l && l(i), a && a(o); f.length; ) f.shift()();
          return u && n.push.apply(n, u), t();
        },
        o = (self.webpackChunknode_graphql_kit =
          self.webpackChunknode_graphql_kit || []);
      function r() {
        for (var t, a = 0; a < n.length; a++) {
          for (var o = n[a], r = !0, d = 1; d < o.length; d++) {
            var s = o[d];
            0 !== e[s] && (r = !1);
          }
          r && (n.splice(a--, 1), (t = i((i.s = o[0]))));
        }
        return 0 === n.length && (i.x(), (i.x = function () {})), t;
      }
      o.forEach(a.bind(null, 0)), (o.push = a.bind(null, o.push.bind(o)));
      var d = i.x;
      i.x = function () {
        return (i.x = d || function () {}), (t = r)();
      };
    })(),
    i.x();
})();
