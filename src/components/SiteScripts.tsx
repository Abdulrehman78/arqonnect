"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ported from the original static build's assets/main.js.
 *
 * Split into two effects:
 *  - a "global" effect that runs once, for chrome that lives in the
 *    shared layout (loader, spotlight, nav scroll state, magnetic
 *    buttons via delegation).
 *  - a "per-route" effect that re-initializes on every navigation,
 *    since each page mounts a different set of section components
 *    (hero canvas, scene engine, tickers, demo widgets, etc. only
 *    exist on the pages that use them).
 */
export default function SiteScripts() {
  const pathname = usePathname();

  // ---- global, mount once ----
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // loader
    const loader = document.getElementById("loader");
    const onLoad = () => {
      setTimeout(() => loader?.classList.add("hide"), 400);
    };
    window.addEventListener("load", onLoad);
    cleanups.push(() => window.removeEventListener("load", onLoad));
    // in case 'load' already fired before hydration
    if (document.readyState === "complete") onLoad();

    // cursor spotlight
    const spotlightEl = document.getElementById("spotlight");
    const onMouseMove = (e: MouseEvent) => {
      spotlightEl?.style.setProperty("--sx", e.clientX + "px");
      spotlightEl?.style.setProperty("--sy", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    cleanups.push(() =>
      window.removeEventListener("mousemove", onMouseMove)
    );

    // nav scroll state + progress bar
    const navEl = document.getElementById("nav");
    const progressEl = document.getElementById("progress");
    const onScroll = () => {
      navEl?.classList.toggle("scrolled", window.scrollY > 20);
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      if (progressEl) progressEl.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // magnetic buttons, via delegation so it covers buttons on every route
    const onBtnMove = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement)?.closest<HTMLElement>(".btn");
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.18;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      btn.style.transform = `translate(${x}px,${y}px)`;
    };
    const onBtnLeave = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement)?.closest<HTMLElement>(".btn");
      if (btn) btn.style.transform = "";
    };
    document.addEventListener("mousemove", onBtnMove, { passive: true });
    document.addEventListener("mouseout", onBtnLeave, { passive: true });
    cleanups.push(() => {
      document.removeEventListener("mousemove", onBtnMove);
      document.removeEventListener("mouseout", onBtnLeave);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // ---- per-route, re-run on every navigation ----
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const intervals: Array<ReturnType<typeof setInterval>> = [];

    // reveal-on-scroll (zoom-in)
    const revealEls = document.querySelectorAll(".reveal-3d");
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.22 }
    );
    revealEls.forEach((el) => revealIO.observe(el));
    cleanups.push(() => revealIO.disconnect());

    // reel grid animation trigger
    const reelGrid = document.querySelector(".reel-grid");
    if (reelGrid) {
      const reelIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reelGrid.classList.add("in");
              reelIO.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      reelIO.observe(reelGrid);
      cleanups.push(() => reelIO.disconnect());
    }

    // cost calculator (pricing page)
    const calcMinutes = document.getElementById(
      "calcMinutes"
    ) as HTMLInputElement | null;
    if (calcMinutes) {
      const calcMinutesValue = document.getElementById("calcMinutesValue")!;
      const calcTiers = document.querySelectorAll<HTMLElement>(".calc-tier");
      const calcCPM = document.getElementById("calcCPM")!;
      const calcVoiceCost = document.getElementById("calcVoiceCost")!;
      const calcCrmCost = document.getElementById("calcCrmCost")!;
      const calcTeleCost = document.getElementById("calcTeleCost")!;
      const calcTotal = document.getElementById("calcTotal")!;
      let calcRate = 0.09;
      const updateCalc = () => {
        const mins = parseInt(calcMinutes.value, 10);
        calcMinutesValue.textContent = mins.toLocaleString() + " min";
        const voice = calcRate * 0.5;
        const crm = calcRate * 0.33;
        const tele = calcRate * 0.17;
        calcCPM.textContent = calcRate.toFixed(3);
        calcVoiceCost.textContent = "$" + voice.toFixed(3) + "/min";
        calcCrmCost.textContent = "$" + crm.toFixed(3) + "/min";
        calcTeleCost.textContent = "$" + tele.toFixed(3) + "/min";
        calcTotal.textContent = "$" + Math.round(calcRate * mins).toLocaleString();
      };
      calcMinutes.addEventListener("input", updateCalc);
      cleanups.push(() => calcMinutes.removeEventListener("input", updateCalc));
      const tierHandlers: Array<[HTMLElement, () => void]> = [];
      calcTiers.forEach((btn) => {
        const h = () => {
          calcTiers.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          calcRate = parseFloat(btn.dataset.rate || "0.09");
          updateCalc();
        };
        btn.addEventListener("click", h);
        tierHandlers.push([btn, h]);
      });
      cleanups.push(() =>
        tierHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
      );
      updateCalc();
    }

    // founder video play
    const founderPlay = document.getElementById("founderPlay");
    if (founderPlay) {
      const onClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".play-btn")) return;
        const vid = founderPlay.querySelector<HTMLVideoElement>(
          ".founder-video-el"
        );
        if (vid && (vid.querySelector("source") || vid.getAttribute("src"))) {
          (founderPlay.querySelector(".founder-poster") as HTMLElement)!.style.display =
            "none";
          (founderPlay.querySelector(".play-btn") as HTMLElement)!.style.display =
            "none";
          vid.style.display = "block";
          vid.play();
        } else {
          const btn = founderPlay.querySelector<HTMLElement>(".play-btn");
          if (btn) {
            btn.style.transform = "scale(0.9)";
            timers.push(setTimeout(() => (btn.style.transform = ""), 200));
          }
        }
      };
      founderPlay.addEventListener("click", onClick);
      cleanups.push(() => founderPlay.removeEventListener("click", onClick));
    }

    // chat demo
    const chatBody = document.getElementById("chatDemoBody");
    if (chatBody) {
      const chatForm = document.getElementById(
        "chatDemoForm"
      ) as HTMLFormElement;
      const chatInput = document.getElementById(
        "chatDemoInput"
      ) as HTMLInputElement;
      const chatSuggestions = document.getElementById("chatSuggestions")!;

      const chatAddMsg = (text: string, who: string) => {
        const d = document.createElement("div");
        d.className = "chat-msg " + who;
        d.textContent = text;
        chatBody.appendChild(d);
        chatBody.scrollTop = chatBody.scrollHeight;
        return d;
      };
      const chatReplyFor = (text: string) => {
        const t = text.toLowerCase();
        if (
          t.includes("price") ||
          t.includes("cost") ||
          t.includes("$") ||
          t.includes("pricing")
        ) {
          return "Everything — CRM, voice AI, chat, SEO, the works — runs $97/month once you're set up, replacing $1,600+ of separate tools. Want the full comparison?";
        }
        if (
          t.includes("book") ||
          t.includes("demo") ||
          t.includes("call") ||
          t.includes("meeting")
        ) {
          return "I can get you on the calendar right now — mornings or afternoons this week both have openings. Which works better for you?";
        }
        if (t.includes("voice") || t.includes("phone")) {
          return "Yep — try the Voice AI tab above, it's the same agent that answers real client calls. Sounds human, books appointments, works 24/7.";
        }
        if (t.includes("hi") || t.includes("hello") || t.includes("hey")) {
          return "Hey there! I can tell you about pricing, book you a demo, or walk you through what we automate. What's on your mind?";
        }
        if (
          t.includes("seo") ||
          t.includes("aeo") ||
          t.includes("geo") ||
          t.includes("rank")
        ) {
          return "We run SEO, AEO, GEO and AIO together — so you show up in Google, Perplexity, and AI Overviews, not just classic search.";
        }
        return "Good question — I've flagged that for the team, and a real specialist can go deeper on a quick call. Want me to book that in?";
      };
      const chatSend = (text: string) => {
        if (!text.trim()) return;
        chatAddMsg(text, "user");
        chatInput.value = "";
        const typing = document.createElement("div");
        typing.className = "chat-msg bot typing";
        typing.innerHTML = "<span></span><span></span><span></span>";
        chatBody.appendChild(typing);
        chatBody.scrollTop = chatBody.scrollHeight;
        timers.push(
          setTimeout(() => {
            typing.remove();
            chatAddMsg(chatReplyFor(text), "bot");
          }, 900 + Math.random() * 500)
        );
      };
      const onSubmit = (e: Event) => {
        e.preventDefault();
        chatSend(chatInput.value);
      };
      const onSuggestionClick = (e: Event) => {
        const btn = (e.target as HTMLElement).closest(".suggestion");
        if (btn) chatSend(btn.textContent || "");
      };
      chatForm.addEventListener("submit", onSubmit);
      chatSuggestions.addEventListener("click", onSuggestionClick);
      cleanups.push(() => {
        chatForm.removeEventListener("submit", onSubmit);
        chatSuggestions.removeEventListener("click", onSuggestionClick);
      });
    }

    // voice demo
    const voiceCallBtn = document.getElementById("voiceCallBtn");
    if (voiceCallBtn) {
      const voiceTranscript = document.getElementById("voiceTranscript")!;
      const voiceStatusText = document.getElementById("voiceStatusText")!;
      const voiceTimer = document.getElementById("voiceTimer")!;
      const voiceAvatar = document.getElementById("voiceAvatar")!;
      const callScript: Array<[string, string, string]> = [
        [
          "agent",
          "Agent",
          "Thanks for calling ArQonnect Dental, this is Ava — how can I help you today?",
        ],
        [
          "caller",
          "Caller",
          "Hi, I need to get a cleaning booked, my tooth has been sensitive.",
        ],
        [
          "agent",
          "Agent",
          "Sorry to hear that — I can get you seen this week. Does Wednesday at 2 PM work?",
        ],
        ["caller", "Caller", "Yeah, 2 PM Wednesday is perfect."],
        [
          "agent",
          "Agent",
          "You are all set for Wednesday at 2 PM. I will text a confirmation now — anything else?",
        ],
        ["caller", "Caller", "Nope, that is everything. Thanks!"],
        ["agent", "Agent", "Anytime — see you Wednesday!"],
      ];
      let voiceActive = false;
      let voiceInterval: ReturnType<typeof setInterval> | null = null;
      let voiceSeconds = 0;
      let voiceStepTimer: ReturnType<typeof setTimeout> | null = null;

      const resetVoiceDemo = () => {
        voiceActive = false;
        if (voiceInterval) clearInterval(voiceInterval);
        if (voiceStepTimer) clearTimeout(voiceStepTimer);
        voiceSeconds = 0;
        voiceTimer.textContent = "00:00";
        voiceStatusText.textContent = "Ready to call";
        voiceAvatar.classList.remove("live");
        voiceCallBtn.textContent = "Start Demo Call →";
        voiceTranscript.innerHTML =
          '<p class="voice-hint">Press "Start Demo Call" to hear how ArQonnect\'s Voice AI handles a real booking call — live transcript will appear here.</p>';
      };

      const startVoiceDemo = () => {
        voiceActive = true;
        voiceTranscript.innerHTML = "";
        voiceStatusText.textContent = "Live — connected";
        voiceAvatar.classList.add("live");
        voiceCallBtn.textContent = "End Call";
        voiceInterval = setInterval(() => {
          voiceSeconds++;
          const m = String(Math.floor(voiceSeconds / 60)).padStart(2, "0");
          const sSec = String(voiceSeconds % 60).padStart(2, "0");
          voiceTimer.textContent = m + ":" + sSec;
        }, 1000);
        intervals.push(voiceInterval);

        let i = 0;
        const nextLine = () => {
          if (!voiceActive || i >= callScript.length) {
            if (voiceActive) {
              voiceStatusText.textContent = "Call ended";
              voiceAvatar.classList.remove("live");
              if (voiceInterval) clearInterval(voiceInterval);
              voiceCallBtn.textContent = "Start Demo Call →";
              voiceActive = false;
            }
            return;
          }
          const [cls, label, line] = callScript[i];
          const el = document.createElement("div");
          el.className = "voice-line " + cls;
          el.innerHTML = "<b>" + label + "</b><span></span>";
          voiceTranscript.appendChild(el);
          voiceTranscript.scrollTop = voiceTranscript.scrollHeight;
          const span = el.querySelector("span")!;
          let ci = 0;
          const typeInterval = setInterval(() => {
            span.textContent += line[ci];
            ci++;
            voiceTranscript.scrollTop = voiceTranscript.scrollHeight;
            if (ci >= line.length) clearInterval(typeInterval);
          }, 16);
          intervals.push(typeInterval);
          i++;
          voiceStepTimer = setTimeout(nextLine, 1900 + line.length * 10);
          timers.push(voiceStepTimer);
        };
        voiceStepTimer = setTimeout(nextLine, 500);
        timers.push(voiceStepTimer);
      };

      const onVoiceClick = () => {
        if (voiceActive) resetVoiceDemo();
        else startVoiceDemo();
      };
      voiceCallBtn.addEventListener("click", onVoiceClick);
      cleanups.push(() => {
        voiceCallBtn.removeEventListener("click", onVoiceClick);
        if (voiceInterval) clearInterval(voiceInterval);
        if (voiceStepTimer) clearTimeout(voiceStepTimer);
      });
    }

    // demo tabs (chat / voice)
    const demoTabBtns = document.querySelectorAll<HTMLElement>(".demo-tab-btn");
    const demoTabHandlers: Array<[HTMLElement, () => void]> = [];
    demoTabBtns.forEach((btn) => {
      const h = () => {
        demoTabBtns.forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".demo-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.demo-panel[data-demopanel="${btn.dataset.demo}"]`)
          ?.classList.add("active");
      };
      btn.addEventListener("click", h);
      demoTabHandlers.push([btn, h]);
    });
    cleanups.push(() =>
      demoTabHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    // agent template tabs
    const tmplTabBtns = document.querySelectorAll<HTMLElement>(".tmpl-tab-btn");
    const tmplTabHandlers: Array<[HTMLElement, () => void]> = [];
    tmplTabBtns.forEach((btn) => {
      const h = () => {
        tmplTabBtns.forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".tmpl-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.tmpl-panel[data-tmplpanel="${btn.dataset.tmpl}"]`)
          ?.classList.add("active");
      };
      btn.addEventListener("click", h);
      tmplTabHandlers.push([btn, h]);
    });
    cleanups.push(() =>
      tmplTabHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    // capability tabs
    const tabBtns = document.querySelectorAll<HTMLElement>(".tab-btn");
    const tabStage = document.querySelector<HTMLElement>(".tab-stage");
    const tabHandlers: Array<[HTMLElement, () => void]> = [];
    tabBtns.forEach((btn) => {
      const h = () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".tab-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document
          .querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`)
          ?.classList.add("active");
        if (tabStage)
          tabStage.style.setProperty(
            "--stage-accent",
            getComputedStyle(btn).getPropertyValue("--accent")
          );
      };
      btn.addEventListener("click", h);
      tabHandlers.push([btn, h]);
    });
    if (tabStage && tabBtns[0]) {
      tabStage.style.setProperty(
        "--stage-accent",
        getComputedStyle(tabBtns[0]).getPropertyValue("--accent")
      );
    }
    cleanups.push(() =>
      tabHandlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
    );

    // cinematic scene engine (legacy services page only — skip scroll-fade stack)
    const sceneNav = document.getElementById("sceneNav");
    if (sceneNav) {
      const scenes = document.querySelectorAll(".services-story .scene");
      scenes.forEach((_s, i) => {
        const d = document.createElement("div");
        d.className = "dot";
        d.dataset.i = String(i);
        sceneNav.appendChild(d);
      });
      const dots = sceneNav.querySelectorAll(".dot");
      const updateScenes = () => {
        let anyVisible = false;
        scenes.forEach((scene, i) => {
          const rect = scene.getBoundingClientRect();
          const visible =
            rect.top < window.innerHeight * 0.7 &&
            rect.bottom > window.innerHeight * 0.3;
          scene.classList.toggle("in", visible);
          if (visible) {
            anyVisible = true;
            dots.forEach((d) => d.classList.remove("active"));
            dots[i]?.classList.add("active");
            const v = scene.querySelector("video");
            if (v && v.paused) v.play().catch(() => {});
          } else {
            const v = scene.querySelector("video");
            if (v && !v.paused) v.pause();
          }
        });
        sceneNav.classList.toggle("show", anyVisible);
      };
      window.addEventListener("scroll", updateScenes, { passive: true });
      updateScenes();
      cleanups.push(() => {
        window.removeEventListener("scroll", updateScenes);
        sceneNav.innerHTML = "";
      });
    }

    // door threshold zoom (legacy — only if door elements exist)
    const thresholdSection = document.getElementById("threshold");
    const doorEl = document.getElementById("door");
    const doorGlow = document.getElementById("doorGlow");
    const thresholdText = document.getElementById("thresholdText");
    if (thresholdSection && doorEl && doorGlow && thresholdText) {
      const onThresholdScroll = () => {
        const rect = thresholdSection.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        let p = -rect.top / total;
        p = Math.max(0, Math.min(1, p));
        const scale = 1 + p * 9;
        const rotate = (1 - p) * 10;
        doorEl.style.transform = `scale(${scale}) rotateY(${rotate}deg)`;
        doorGlow.style.opacity = String(Math.min(1, p * 1.6));
        thresholdText.style.opacity = String(1 - Math.min(1, p * 2.2));
        thresholdText.style.transform = `translateY(${-p * 60}px) scale(${
          1 - p * 0.15
        })`;
      };
      window.addEventListener("scroll", onThresholdScroll, { passive: true });
      onThresholdScroll();
      cleanups.push(() =>
        window.removeEventListener("scroll", onThresholdScroll)
      );
    }

    // mouse tilt on CRM frame
    const tiltFrame = document.getElementById("tiltFrame");
    if (tiltFrame) {
      const onMove = (e: MouseEvent) => {
        const r = tiltFrame.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tiltFrame.style.transform = `rotateY(${x * 8}deg) rotateX(${
          -y * 8
        }deg) scale(1.015)`;
      };
      const onLeave = () => {
        tiltFrame.style.transform = "rotateY(0) rotateX(0) scale(1)";
      };
      tiltFrame.addEventListener("mousemove", onMove);
      tiltFrame.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        tiltFrame.removeEventListener("mousemove", onMove);
        tiltFrame.removeEventListener("mouseleave", onLeave);
      });
    }

    // language ticker (two counter-scrolling rows)
    const langsRow1: Array<[string, string]> = [
      ["🇺🇸", "English"],
      ["🇮🇳", "Hindi"],
      ["🇸🇪", "Swedish"],
      ["🇫🇷", "French"],
      ["🇨🇿", "Czech"],
    ];
    const langsRow2: Array<[string, string]> = [
      ["🇵🇹", "Portuguese"],
      ["🇸🇰", "Slovak"],
      ["🇪🇸", "Spanish"],
      ["🇳🇱", "Dutch"],
      ["🇩🇪", "German"],
      ["🇮🇹", "Italian"],
    ];
    const fillLangTicker = (id: string, arr: Array<[string, string]>) => {
      const el = document.getElementById(id);
      if (!el) return;
      [...arr, ...arr].forEach(([flag, name]) => {
        const sEl = document.createElement("span");
        sEl.className = "lang-chip";
        sEl.innerHTML = `<span class="flag">${flag}</span>${name}`;
        el.appendChild(sEl);
      });
    };
    fillLangTicker("langTicker", langsRow1);
    fillLangTicker("langTicker2", langsRow2);
    cleanups.push(() => {
      const a = document.getElementById("langTicker");
      const b = document.getElementById("langTicker2");
      if (a) a.innerHTML = "";
      if (b) b.innerHTML = "";
    });

    // industry pulse ticker
    const pulseItems = [
      "AI Overviews are changing how people search — GEO is no longer optional",
      "Voice agents are closing the gap between chatbots and real conversations",
      "Missed calls are still the most common way service businesses lose leads",
      "Agencies are consolidating five tools into one AI-run stack",
      "Answer engines like Perplexity now cite structured FAQ content directly",
      "Response speed has become a bigger conversion lever than ad spend",
    ];
    const pulseChipTrack = document.getElementById("pulseChipTrack");
    if (pulseChipTrack) {
      [...pulseItems, ...pulseItems].forEach((c) => {
        const sEl = document.createElement("span");
        sEl.className = "chip";
        sEl.innerHTML = "<b>◆</b> " + c;
        pulseChipTrack.appendChild(sEl);
      });
      cleanups.push(() => (pulseChipTrack.innerHTML = ""));
    }

    // integration chip ticker
    const chips = [
      "WhatsApp",
      "Stripe",
      "Shopify",
      "TikTok",
      "LinkedIn",
      "Google",
      "Slack",
      "Instagram",
      "WooCommerce",
      "Meta Ads",
      "Zapier",
      "QuickBooks",
    ];
    const chipTrack = document.getElementById("chipTrack");
    if (chipTrack) {
      [...chips, ...chips].forEach((c) => {
        const sEl = document.createElement("span");
        sEl.className = "chip";
        sEl.innerHTML = "<b>●</b> " + c;
        chipTrack.appendChild(sEl);
      });
      cleanups.push(() => (chipTrack.innerHTML = ""));
    }

    // services ticker
    const serviceChips = [
      "CRM",
      "Voice AI",
      "Websites & Funnels",
      "Webinar Funnels",
      "Chat Widget / Conversation AI",
      "Call Tracking",
      "Inbound SMS & Social DMs",
      "Social Planner",
      "Missed Call Text-Back",
      "Ad Manager",
      "SMM",
      "SEO",
      "AEO",
      "GEO",
      "AIO",
      "AI Business Consultancy",
      "Technical Writing",
      "AI Web Development",
      "AI Mobile Development",
    ];
    const serviceChipTrack = document.getElementById("serviceChipTrack");
    if (serviceChipTrack) {
      [...serviceChips, ...serviceChips].forEach((c) => {
        const sEl = document.createElement("span");
        sEl.className = "chip";
        sEl.innerHTML = "<b>●</b> " + c;
        serviceChipTrack.appendChild(sEl);
      });
      cleanups.push(() => (serviceChipTrack.innerHTML = ""));
    }

    // hero canvas neural network
    const canvas = document.getElementById(
      "hero-canvas"
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      let W = 0,
        H = 0;
      let nodes: Array<{ x: number; y: number; vx: number; vy: number; r: number }> =
        [];
      let raf = 0;
      let running = true;

      const resize = () => {
        W = canvas.width = canvas.offsetWidth * devicePixelRatio;
        H = canvas.height = canvas.offsetHeight * devicePixelRatio;
      };
      const initNodes = () => {
        nodes = [];
        const count = Math.min(70, Math.floor(window.innerWidth / 22));
        for (let i = 0; i < count; i++) {
          nodes.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.6,
          });
        }
      };
      const onResize = () => {
        resize();
        initNodes();
      };
      window.addEventListener("resize", onResize);
      resize();
      initNodes();

      const draw = () => {
        if (!running) return;
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        }
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i],
              b = nodes[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 160 * devicePixelRatio) {
              ctx.strokeStyle = `rgba(79,127,255,${
                0.16 * (1 - d / (160 * devicePixelRatio))
              })`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        nodes.forEach((n) => {
          ctx.beginPath();
          ctx.fillStyle = "rgba(143,180,255,0.75)";
          ctx.arc(n.x, n.y, n.r * devicePixelRatio, 0, Math.PI * 2);
          ctx.fill();
        });
        raf = requestAnimationFrame(draw);
      };
      draw();

      cleanups.push(() => {
        running = false;
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach((t) => clearTimeout(t));
      intervals.forEach((i) => clearInterval(i));
    };
  }, [pathname]);

  return null;
}
