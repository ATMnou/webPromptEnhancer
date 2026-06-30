const I18N = {
  ko: {
    documentTitle: "프롬프트 개선기",
    langToggle: "English",
    hero: {
      title: "프롬프트 개선기",
      copy: "원하는 개선 방식 버튼을 고른 뒤, 제공자/모델/API 키(BYOK)를 입력하고 즉시 개선하세요.",
    },
    config: {
      title: "API 설정",
      saveCookie: "쿠키 저장",
      providerPreset: "제공자 프리셋",
      provider: "제공자",
      providerPlaceholder: "예: openai",
      model: "모델",
      modelPlaceholder: "예: gpt-4o-mini",
      modelPreset: "모델 프리셋",
      apiKey: "API 키 (BYOK)",
      apiKeyPlaceholder: "sk-...",
      endpoint: "Endpoint (선택)",
      endpointPlaceholder: "비우면 프리셋 기본값 사용",
      maxTokens: "Max Tokens (선택)",
      maxTokensPlaceholder: "예: 512",
      hint: "브라우저 쿠키에만 저장됩니다. 공용 PC에서는 저장을 권장하지 않습니다.",
    },
    preset: {
      title: "개선 프롬프트 선택",
    },
    input: {
      title: "원본 프롬프트",
      placeholder: "개선하고 싶은 프롬프트를 입력하세요...",
    },
    output: {
      title: "개선 결과",
      placeholder: "여기에 결과가 표시됩니다...",
    },
    actions: {
      enhance: "프롬프트 개선 실행",
      copy: "복사",
    },
    status: {
      cookieSaved: "설정을 쿠키에 저장했습니다.",
      providerPresetApplied: "제공자 프리셋 적용: {name}",
      modelPresetApplied: "모델 프리셋 적용: {name}",
      noModelPreset: "해당 제공자의 모델 프리셋이 없습니다.",
      enhancing: "개선 중...",
      done: "개선 완료. 설정은 쿠키에 저장되었습니다.",
      copied: "개선 결과를 복사했습니다.",
      unknownError: "알 수 없는 오류",
      copyFailed: "복사 실패",
    },
    errors: {
      providerRequired: "제공자를 입력하세요.",
      modelRequired: "모델을 입력하세요.",
      apiKeyRequired: "API 키를 입력하세요.",
      sourceRequired: "원본 프롬프트를 입력하세요.",
      endpointRequired: "Endpoint를 입력하거나 제공자 프리셋을 선택하세요.",
      emptyResponse: "응답이 비어 있습니다. 모델/권한/요청 제한을 확인하세요.",
      nothingToCopy: "복사할 결과가 없습니다.",
      invalidMaxTokens: "Max Tokens는 1 이상의 정수여야 합니다.",
      apiError: "API 오류({status}): {body}",
    },
    prompts: {
      fancyisland: {
        title: "공포 이미지 프롬프트",
        description: "단순한 설명을 불안하고 초현실적인 공포 이미지 프롬프트로 변환합니다.",
      },
      libraryofruina: {
        title: "라이브러리 오브 루이나 배경",
        description: "단순한 아이디어를 분위기 있고 영화적인 배경 이미지 프롬프트로 변환합니다.",
      },
      trollgefiles: {
        title: "트롤지 스타일 이미지 프롬프트",
        description: "기괴하고 불쾌한 분위기의 프롬프트로 변환합니다.",
      },
    },
  },
  en: {
    documentTitle: "Prompt Enhancer",
    langToggle: "한국어",
    hero: {
      title: "Prompt Enhancer",
      copy: "Pick an enhancement style, then enter provider/model/API key (BYOK) and improve instantly.",
    },
    config: {
      title: "API Settings",
      saveCookie: "Save Cookie",
      providerPreset: "Provider Presets",
      provider: "Provider",
      providerPlaceholder: "e.g. openai",
      model: "Model",
      modelPlaceholder: "e.g. gpt-4o-mini",
      modelPreset: "Model Presets",
      apiKey: "API Key (BYOK)",
      apiKeyPlaceholder: "sk-...",
      endpoint: "Endpoint (Optional)",
      endpointPlaceholder: "Leave empty to use preset default",
      maxTokens: "Max Tokens (Optional)",
      maxTokensPlaceholder: "e.g. 512",
      hint: "Stored only in browser cookies. Avoid saving on shared devices.",
    },
    preset: {
      title: "Select Enhancement Prompt",
    },
    input: {
      title: "Source Prompt",
      placeholder: "Enter the prompt you want to improve...",
    },
    output: {
      title: "Enhanced Result",
      placeholder: "The improved result will appear here...",
    },
    actions: {
      enhance: "Run Prompt Enhancement",
      copy: "Copy",
    },
    status: {
      cookieSaved: "Configuration saved to cookie.",
      providerPresetApplied: "Provider preset applied: {name}",
      modelPresetApplied: "Model preset applied: {name}",
      noModelPreset: "No model presets available for this provider.",
      enhancing: "Enhancing...",
      done: "Enhancement done. Configuration saved to cookie.",
      copied: "Enhanced result copied.",
      unknownError: "Unknown error",
      copyFailed: "Copy failed",
    },
    errors: {
      providerRequired: "Please enter a provider.",
      modelRequired: "Please enter a model.",
      apiKeyRequired: "Please enter an API key.",
      sourceRequired: "Please enter a source prompt.",
      endpointRequired: "Enter an endpoint or choose a provider preset.",
      emptyResponse: "Empty response. Check model access, permissions, or rate limits.",
      nothingToCopy: "Nothing to copy.",
      invalidMaxTokens: "Max Tokens must be an integer greater than 0.",
      apiError: "API error ({status}): {body}",
    },
    prompts: {
      fancyisland: {
        title: "Horror Image Prompt",
        description: "Transforms simple descriptions into unsettling, surreal horror image prompts.",
      },
      libraryofruina: {
        title: "Library of Ruina Background",
        description: "Transforms simple ideas into atmospheric, cinematic background image prompts.",
      },
      trollgefiles: {
        title: "Trollge Style Image Prompt",
        description: "Transforms simple ideas into grotesque, unsettling image prompts.",
      },
    },
  },
};

const PROMPT_LIBRARY = [
  {
    id: "fancyisland",
    systemInstruction: "You are a specialized Horror Image Prompt Architect. Your goal is to transform simple user descriptions into unsettling, high-contrast, and surreal horror prompts based on a specific dataset's aesthetic.",
    userTemplate: ({ source }) =>
      [
        `### 1. Core Visual Principles
-Anatomical Distortion:** Emphasize impossible anatomy, such as eyes arranged vertically on the nose or mouths appearing where they shouldn't, like on the forehead.
-The "Uncanny" Face:** Focus on "pale, featureless masks" or "smooth, matte skin" that looks like plastic or wax.
-Visceral Detail:** Describe "mottled reds and browns resembling raw flesh" and "uneven, jagged, or sharp rectangular teeth"
-Monochromatic Contrast:** Use a strictly limited palette—mostly monochrome or grayscale—punctuated by "vivid red"
or "cyan-blue luminescence".

### 2. Mandatory Prompt Elements
Every refined prompt must include specific details for the following categories:
-Eyes:** Describe them as "pupil-less", "hollow black sockets", or "bulging with dilated pupils" Mention "dark streaks" or "blood tears" running down the cheeks.
-Expression:** Utilize "silent screams", "unnervingly wide grins", or "disquieting imbalance" through asymmetrical features.
-Lighting:** Always specify "stark and frontal lighting" or "dramatic chiaroscuro" to create deep, cavernous shadows.
-Background:** Use "pitch-black", "grainy, mottled gray", or "claustrophobic organic patterns" to isolate the subject.

### 3. Formatting the Output
Refined prompts should be written in a descriptive, comma-separated style, avoiding full sentences.

## Refinement Example
User Input: "A creepy girl in a hallway"
Refined Prompt:
> "A pale, stylized figure with long straight black hair standing in a dimly lit, claustrophobic corridor. The face is stark white with vertical striations and an unnervingly wide, blood-stained grin revealing numerous sharp teeth Large, hollow eye sockets with dark streaks running down the cheeks The figure wears a dark garment contrasting with a metallic silver neck. Stark, frontal lighting casting deep shadows, grainy texture, evocative of ritualistic horror and anatomical impossibility."

## 📝 Key Vocabulary to Inject
-Textures:** "Fibrous", "matte" , "wet clay", "jagged/serrated".
-Mood:** "Menacing", "clinical precision", "surreal", "grotesque".
-Color Accents:** "Maroon shadows", "glowing red elements" , "rainbow gradients edging the hair".
Source: ${source}`,
      ].join("\n"),
  },
  {
    id: "libraryofruina",
    systemInstruction:
      "You are a Prompt Enhancer specialized in converting simple user descriptions into highly atmospheric, cinematic, and painterly image generation prompts. Your goal is to imbue every prompt with a moody, artistic, and solemn aesthetic based on specific stylistic guidelines.",
    userTemplate: ({ source }) =>
      [
        `
# Core Aesthetic Guidelines

1. Artistic Style & Brushwork
- Always specify a "painterly", "stylized digital painting", or "illustration" style.
- Use descriptors like "textured brushstrokes," "loose and energetic brushstrokes," or "bold, broad brushstrokes" to avoid a flat, overly clean digital look.

2. Mood & Atmosphere
- The overall mood must lean towards being "atmospheric," "somber," "melancholic," "quiet," "mysterious," or "serene."
- Emphasize themes of isolation, profound scale, ancient stillness, or cinematic desolation.

3. Lighting & Contrast (Crucial)

- Avoid flat or harsh daylight. Instead, use "dimly lit," "diffused and gloomy lighting," or "soft, ethereal light."
- Incorporate high-contrast elements: use "deep shadows" punctuated by "glowing lights," "warm highlights," or "brilliant, hazy light filtering in from an opening."
- Utilize silhouetting effect ("silhouetted against a bright light") to add depth.

4. Color Palette

- Lean toward a "monochromatic" or "muted" color scheme (e.g., shades of gray, charcoal black, sepia-toned, rich earthy browns, or cool blues).
- If a vibrant color is used, it should be a single dominant tone (e.g., "vibrant, monochromatic emerald-green light") or a localized accent that contrasts with a muted background (e.g., "glowing signs casting faint light onto the desolate ground").

5. Composition & Scale

- Emphasize "verticality" and "profound scale" using elements like tall pillars, towering bookshelves, or flanking vertical buildings.
- Create depth in the foreground by adding relevant details (e.g., "cluttered with indistinct objects," "scattered items on the floor").
- Frequently use a depth transition, such as a dark, atmospheric foreground opening up or receding into a "bright, hazy, or sunlit distance."

# Prompt Formatting Output
- Write the final enhanced prompt in English as a descriptive, continuous paragraph or a concise comma-separated list of detailed visual elements.
- Do NOT use buzzwords like "photorealistic," "hyperrealistic," or "8k." Stick to the artistic and painterly vocabulary detailed above..
Source: ${source}`,
      ].join("\n"),
  },

  {
    id: "trollgefiles",
    systemInstruction:
      "You are an expert Image Prompt Enhancer. Your task is to take a simple, raw user idea and transform it into a highly detailed, professional, and evocative English prompt optimized for AI text-to-image generators (like Midjourney or Stable Diffusion).",
    userTemplate: ({ source }) =>
      [
        `
When enhancing prompts, you must meticulously break down the description into five key pillars: Core Subject, Artistic Style/Aesthetic, Composition/Poses, Lighting, and Mood/Atmosphere.

### Guidelines for Enhancement:
1. Core Subject & Details: Expand on the main character/object. Specify textures, anatomical details (e.g., "emaciated, skeletal frame", "spindly black body", "exaggerated, wide-eyed grin"), clothing, and any specific items they are holding or interacting with.
2. Artistic Style & Aesthetic: Define the specific visual medium. Use precise terminology such as "stylized digital illustration", "monochromatic sketchy animation aesthetic", "minimalist high-contrast graphic style", or "modern internet horror aesthetic".
3. Composition & Background: Describe the placement of the subject and the background environment clearly (e.g., "centered in the foreground", "standing against a textured charcoal-gray wall", "floating against a stormy sky above a darkened cityscape"). Mention any secondary background objects or negative space.
4. Lighting: Specify the light source, quality, and shadows to give the image depth. Use descriptors like "low-key dramatic lighting", "dim, atmospheric lighting casting subtle shadows", or "uniform lighting lacking distinct shadows for a flat graphic effect".
5. Mood & Atmosphere: Infuse sensory words that dictate the emotional tone of the image, such as "somber, eerie, and unsettling", "haunting isolation", "foreboding and menacing", or "surreal, nightmare-like quality".

---

### Output Format:
Provide ONLY the final enhanced prompt in a single, cohesive paragraph. Do not include introductory text, explanations, or markdown formatting like bolding inside the prompt. Start directly with the enhanced description.

---

### Examples for Inspiration (Do not copy verbatim, use as quality benchmarks):

Example 1:
A stylized, monochromatic illustration depicts a tall, emaciated, black-silhouetted humanoid figure standing against a muted, textured gray background. The creature features elongated, thin limbs, sharp claw-like fingers, and a slightly hunched posture. Its head is a stark white, hand-drawn mask with deep, sorrowful, downward-curving eyes and a melancholy expression, providing a sharp contrast to its dark, formless body. Low-key lighting casts subtle shadows, creating a somber, eerie, and unsettling atmosphere. The art style mimics a rough, sketchy animation aesthetic, emphasizing a sense of existential despair and haunting isolation within the minimalist space.

Example 2:
A sinister, humanoid clown stands centered in the foreground, rendered in a stylized, eerie digital illustration. The figure features a pale, rounded head with hollow, dark eye sockets, a small red nose, and a wide, distorted mouth filled with rows of sharp, jagged teeth. Its hair is styled into two red, horn-like tufts. The background consists of dark, silhouetted tree trunks set against a deep, glowing red circular backdrop, creating a stark contrast. The lighting is moody and dramatic, casting a haunting, menacing atmosphere across the entire scene.

Example 3:
This digital illustration features a tall, slender, humanoid figure with a skeletal, pitch-black body standing against a dark, textured grey wall. The entity possesses an oversized, pale troll-face mask with a wide, exaggerated grin and deep-set eyes. It holds a boxy, vintage television above its head with thin arms, displaying static on its screen. The scene is illuminated by a dim, moody light that casts no strong shadows, enhancing the eerie, surreal atmosphere. The artistic style is reminiscent of modern internet horror aesthetics, characterized by stark monochrome tones and a minimalist, unsettling composition.
Source: ${source}`,
      ].join("\n"),
  },
];

const PROVIDER_PRESETS = {
  openrouter: {
    provider: "openrouter",
    endpoint: "https://openrouter.ai/api/v1/chat/completions",
    models: ["deepseek/deepseek-v4-flash", "google/gemma-4-31b-it", "~google/gemini-flash-latest", "~anthropic/claude-haiku-latest"],
  },
  featherless: {
    provider: "featherless",
    endpoint: "https://featherless.ai/api/v1/chat/completions",
    models: ["zai-org/GLM-5.2", "deepseek-ai/DeepSeek-V4-Flash", "huihui-ai/Huihui-Qwythos-9B-Claude-Mythos-5-1M-abliterated"],
  },
};

const COOKIE_KEYS = {
  provider: "wpe_provider",
  model: "wpe_model",
  endpoint: "wpe_endpoint",
  maxTokens: "wpe_max_tokens",
  apiKey: "wpe_api_key",
  language: "wpe_lang",
};

const SUPPORTED_LANGS = ["ko", "en"];
let currentLang = "en";

const providerInput = document.getElementById("provider-input");
const modelInput = document.getElementById("model-input");
const apiKeyInput = document.getElementById("api-key-input");
const endpointInput = document.getElementById("endpoint-input");
const maxTokensInput = document.getElementById("max-tokens-input");
const promptOptions = document.getElementById("prompt-options");
const sourcePrompt = document.getElementById("source-prompt");
const enhancedOutput = document.getElementById("enhanced-output");
const statusText = document.getElementById("status-text");
const providerPresets = document.getElementById("provider-presets");
const modelPresets = document.getElementById("model-presets");
const langToggleBtn = document.getElementById("lang-toggle-btn");

function normalizeLanguage(lang) {
  if (!lang) {
    return "en";
  }
  return lang.toLowerCase().startsWith("ko") ? "ko" : "en";
}

function t(key, vars = {}) {
  const segments = key.split(".");
  let text = I18N[currentLang];
  for (const segment of segments) {
    text = text?.[segment];
  }

  if (typeof text !== "string") {
    return key;
  }

  return text.replace(/\{(\w+)\}/g, (_, name) => (vars[name] ?? "").toString());
}

function getPromptI18n(itemId, field) {
  return I18N[currentLang]?.prompts?.[itemId]?.[field] || I18N.en.prompts?.[itemId]?.[field] || itemId;
}

function applyI18nToPage() {
  document.documentElement.lang = currentLang;
  document.title = t("documentTitle");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    node.placeholder = t(key);
  });

  langToggleBtn.textContent = t("langToggle");
}

function setStatus(message, kind = "") {
  statusText.className = "status";
  if (kind) {
    statusText.classList.add(kind);
  }
  statusText.textContent = message;
}

function setCookie(name, value, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;

  // file:// 환경에서는 쿠키가 유지되지 않을 수 있어 localStorage를 백업 저장소로 사용.
  try {
    localStorage.setItem(name, value);
  } catch (_) {
    // ignore storage errors
  }
}

function getCookie(name) {
  const target = `${name}=`;
  const pairs = document.cookie ? document.cookie.split(";") : [];
  for (const pair of pairs) {
    const item = pair.trim();
    if (item.startsWith(target)) {
      return decodeURIComponent(item.slice(target.length));
    }
  }

  try {
    return localStorage.getItem(name) || "";
  } catch (_) {
    return "";
  }
}

function saveConfigToCookies() {
  setCookie(COOKIE_KEYS.provider, providerInput.value.trim());
  setCookie(COOKIE_KEYS.model, modelInput.value.trim());
  setCookie(COOKIE_KEYS.endpoint, endpointInput.value.trim());
  setCookie(COOKIE_KEYS.maxTokens, maxTokensInput.value.trim());
  setCookie(COOKIE_KEYS.apiKey, apiKeyInput.value.trim());
  setCookie(COOKIE_KEYS.language, currentLang);
  setStatus(t("status.cookieSaved"), "ok");
}

function loadConfigFromCookies() {
  providerInput.value = getCookie(COOKIE_KEYS.provider);
  modelInput.value = getCookie(COOKIE_KEYS.model);
  endpointInput.value = getCookie(COOKIE_KEYS.endpoint);
  maxTokensInput.value = getCookie(COOKIE_KEYS.maxTokens);
  apiKeyInput.value = getCookie(COOKIE_KEYS.apiKey);
}

function parseMaxTokens() {
  const raw = maxTokensInput.value.trim();
  if (!raw) {
    return null;
  }

  const value = Number.parseInt(raw, 10);
  if (!Number.isInteger(value) || value < 1) {
    throw new Error(t("errors.invalidMaxTokens"));
  }

  return value;
}

function renderPromptOptions(selectedPresetId = null) {
  promptOptions.innerHTML = "";
  promptOptions.setAttribute("role", "radiogroup");

  PROMPT_LIBRARY.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "preset-option";
    button.setAttribute("role", "radio");
    const isSelected = selectedPresetId ? selectedPresetId === item.id : index === 0;
    button.setAttribute("aria-checked", isSelected ? "true" : "false");
    button.dataset.presetId = item.id;
    if (isSelected) {
      button.classList.add("is-selected");
    }

    button.innerHTML = `
      <span class="radio-title">${getPromptI18n(item.id, "title")}</span>
      <span class="radio-desc">${getPromptI18n(item.id, "description")}</span>
    `;

    button.addEventListener("click", () => {
      selectPreset(item.id);
    });

    promptOptions.appendChild(button);
  });
}

function selectPreset(presetId) {
  const options = promptOptions.querySelectorAll(".preset-option");
  options.forEach((option) => {
    const isSelected = option.dataset.presetId === presetId;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-checked", isSelected ? "true" : "false");
  });
}

function getSelectedPreset() {
  const selected = promptOptions.querySelector(".preset-option.is-selected");
  if (!selected) {
    return PROMPT_LIBRARY[0];
  }
  const selectedId = selected.dataset.presetId;
  return PROMPT_LIBRARY.find((item) => item.id === selectedId) || PROMPT_LIBRARY[0];
}

function renderProviderPresetButtons() {
  providerPresets.innerHTML = "";

  Object.values(PROVIDER_PRESETS).forEach((preset) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip-btn";
    btn.textContent = preset.provider;
    btn.addEventListener("click", () => {
      providerInput.value = preset.provider;
      endpointInput.value = preset.endpoint;
      if (!modelInput.value.trim() && preset.models.length > 0) {
        modelInput.value = preset.models[0];
      }
      renderModelPresetButtons(preset.provider);
      setStatus(t("status.providerPresetApplied", { name: preset.provider }), "ok");
    });
    providerPresets.appendChild(btn);
  });
}

function renderModelPresetButtons(providerName) {
  modelPresets.innerHTML = "";

  const preset = PROVIDER_PRESETS[providerName?.toLowerCase()];
  const models = preset?.models || [];
  if (models.length === 0) {
    const hint = document.createElement("span");
    hint.className = "hint";
    hint.textContent = t("status.noModelPreset");
    modelPresets.appendChild(hint);
    return;
  }

  models.forEach((modelName) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip-btn";
    btn.textContent = modelName;
    btn.addEventListener("click", () => {
      modelInput.value = modelName;
      setStatus(t("status.modelPresetApplied", { name: modelName }), "ok");
    });
    modelPresets.appendChild(btn);
  });
}

function validateInputs() {
  if (!providerInput.value.trim()) {
    throw new Error(t("errors.providerRequired"));
  }
  if (!modelInput.value.trim()) {
    throw new Error(t("errors.modelRequired"));
  }
  if (!apiKeyInput.value.trim()) {
    throw new Error(t("errors.apiKeyRequired"));
  }
  if (!sourcePrompt.value.trim()) {
    throw new Error(t("errors.sourceRequired"));
  }
}

async function callChatCompletions({ endpoint, apiKey, model, systemInstruction, userPrompt, maxTokens }) {
  const payload = {
    model,
    messages: [
      { role: "system", content: systemInstruction },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.2,
  };

  if (maxTokens !== null) {
    payload.max_tokens = maxTokens;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(t("errors.apiError", { status: response.status, body: text.slice(0, 300) }));
  }

  const data = await response.json();
  return data?.choices?.[0]?.message?.content?.trim() || "";
}

async function callAnthropic({ endpoint, apiKey, model, systemInstruction, userPrompt, maxTokens }) {
  const payload = {
    model,
    max_tokens: maxTokens ?? 1200,
    system: systemInstruction,
    messages: [{ role: "user", content: userPrompt }],
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(t("errors.apiError", { status: response.status, body: text.slice(0, 300) }));
  }

  const data = await response.json();
  const textBlocks = (data?.content || []).filter((item) => item.type === "text").map((item) => item.text);
  return textBlocks.join("\n").trim();
}

async function enhancePrompt() {
  try {
    validateInputs();
    setStatus(t("status.enhancing"), "ok");

    const provider = providerInput.value.trim().toLowerCase();
    const model = modelInput.value.trim();
    const apiKey = apiKeyInput.value.trim();
    const maxTokens = parseMaxTokens();
    const endpoint = endpointInput.value.trim() || PROVIDER_PRESETS[provider]?.endpoint;

    if (!endpoint) {
      throw new Error(t("errors.endpointRequired"));
    }

    const preset = getSelectedPreset();
    const userPrompt = preset.userTemplate({ source: sourcePrompt.value.trim() });

    let result = "";
    if (provider === "anthropic") {
      result = await callAnthropic({ endpoint, apiKey, model, systemInstruction: preset.systemInstruction, userPrompt, maxTokens });
    } else {
      result = await callChatCompletions({ endpoint, apiKey, model, systemInstruction: preset.systemInstruction, userPrompt, maxTokens });
    }

    if (!result) {
      throw new Error(t("errors.emptyResponse"));
    }

    enhancedOutput.value = result;
    saveConfigToCookies();
    setStatus(t("status.done"), "ok");
  } catch (error) {
    setStatus(error instanceof Error ? error.message : t("status.unknownError"), "error");
  }
}

function attachEvents() {
  document.getElementById("save-cookie-btn").addEventListener("click", saveConfigToCookies);
  document.getElementById("enhance-btn").addEventListener("click", enhancePrompt);

  document.getElementById("copy-btn").addEventListener("click", async () => {
    try {
      if (!enhancedOutput.value.trim()) {
        throw new Error(t("errors.nothingToCopy"));
      }
      await navigator.clipboard.writeText(enhancedOutput.value);
      setStatus(t("status.copied"), "ok");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : t("status.copyFailed"), "error");
    }
  });

  langToggleBtn.addEventListener("click", () => {
    const selectedId = getSelectedPreset().id;
    currentLang = currentLang === "ko" ? "en" : "ko";
    setCookie(COOKIE_KEYS.language, currentLang);
    applyI18nToPage();
    renderPromptOptions(selectedId);
    renderModelPresetButtons(providerInput.value.trim());
  });

  providerInput.addEventListener("input", () => {
    renderModelPresetButtons(providerInput.value.trim());
  });
}

function init() {
  const savedLang = getCookie(COOKIE_KEYS.language);
  currentLang = normalizeLanguage(savedLang || navigator.language);
  if (!SUPPORTED_LANGS.includes(currentLang)) {
    currentLang = "en";
  }

  applyI18nToPage();
  renderPromptOptions();
  renderProviderPresetButtons();
  loadConfigFromCookies();
  renderModelPresetButtons(providerInput.value.trim());
  attachEvents();
}

init();
