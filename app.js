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
      attachHint: "PNG · JPG · WEBP · GIF, 최대 4장 — 버튼 클릭, 드래그앤드롭, Ctrl+V로 첨부",
    },
    output: {
      title: "개선 결과",
      placeholder: "여기에 결과가 표시됩니다...",
    },
    actions: {
      enhance: "프롬프트 개선 실행",
      copy: "복사",
      attachImage: "이미지 첨부",
      removeImage: "이미지 제거",
    },
    status: {
      cookieSaved: "설정을 쿠키에 저장했습니다.",
      providerPresetApplied: "제공자 프리셋 적용: {name}",
      modelPresetApplied: "모델 프리셋 적용: {name}",
      noModelPreset: "해당 제공자의 모델 프리셋이 없습니다.",
      enhancing: "개선 중...",
      done: "개선 완료. 설정은 쿠키에 저장되었습니다.",
      copied: "개선 결과를 복사했습니다.",
      imagesAdded: "이미지 {count}장이 첨부되어 있습니다.",
      unknownError: "알 수 없는 오류",
      copyFailed: "복사 실패",
    },
    errors: {
      providerRequired: "제공자를 입력하세요.",
      modelRequired: "모델을 입력하세요.",
      apiKeyRequired: "API 키를 입력하세요.",
      sourceRequired: "원본 프롬프트를 입력하거나 이미지를 첨부하세요.",
      endpointRequired: "Endpoint를 입력하거나 제공자 프리셋을 선택하세요.",
      emptyResponse: "응답이 비어 있습니다. 모델/권한/요청 제한을 확인하세요.",
      nothingToCopy: "복사할 결과가 없습니다.",
      invalidMaxTokens: "Max Tokens는 1 이상의 정수여야 합니다.",
      imageBadType: "이미지 파일만 첨부할 수 있습니다: {name}",
      imageTooLarge: "파일이 너무 큽니다(최대 {size}MB): {name}",
      imageReadFailed: "이미지를 읽지 못했습니다: {name}",
      tooManyImages: "이미지는 최대 {max}장까지 첨부할 수 있습니다.",
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
      generalimage: {
        title: "범용 이미지 프롬프트",
        description: "단순한 아이디어를 상세한 이미지 생성 프롬프트로 변환합니다.",
      },
      generalvideo: {
        title: "범용 비디오 프롬프트",
        description: "단순한 아이디어를 상세한 비디오 생성 프롬프트로 변환합니다.",
      },
      minimaxh3: {
        title: "MiniMax-H3 비디오 프롬프트",
        description: "H3 가이드에 따라 텍스트(T2VA) 또는 첨부 이미지(I2VA/FL2VA/L2VA)로 비디오 프롬프트를 작성합니다.",
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
      attachHint: "PNG · JPG · WEBP · GIF, up to 4 images — click, drag & drop, or Ctrl+V",
    },
    output: {
      title: "Enhanced Result",
      placeholder: "The improved result will appear here...",
    },
    actions: {
      enhance: "Run Prompt Enhancement",
      copy: "Copy",
      attachImage: "Attach Image",
      removeImage: "Remove image",
    },
    status: {
      cookieSaved: "Configuration saved to cookie.",
      providerPresetApplied: "Provider preset applied: {name}",
      modelPresetApplied: "Model preset applied: {name}",
      noModelPreset: "No model presets available for this provider.",
      enhancing: "Enhancing...",
      done: "Enhancement done. Configuration saved to cookie.",
      copied: "Enhanced result copied.",
      imagesAdded: "{count} image(s) attached.",
      unknownError: "Unknown error",
      copyFailed: "Copy failed",
    },
    errors: {
      providerRequired: "Please enter a provider.",
      modelRequired: "Please enter a model.",
      apiKeyRequired: "Please enter an API key.",
      sourceRequired: "Please enter a source prompt or attach an image.",
      endpointRequired: "Enter an endpoint or choose a provider preset.",
      emptyResponse: "Empty response. Check model access, permissions, or rate limits.",
      nothingToCopy: "Nothing to copy.",
      invalidMaxTokens: "Max Tokens must be an integer greater than 0.",
      imageBadType: "Only image files can be attached: {name}",
      imageTooLarge: "File is too large (max {size}MB): {name}",
      imageReadFailed: "Failed to read image: {name}",
      tooManyImages: "You can attach up to {max} images.",
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
      generalimage: {
        title: "General Image Prompt",
        description: "Transforms simple ideas into detailed image generation prompts.",
      },
      generalvideo: {
        title: "General Video Prompt",
        description: "Transforms simple ideas into detailed video generation prompts.",
      },
      minimaxh3: {
        title: "MiniMax-H3 Video Prompt",
        description: "Writes video prompts per the H3 guide: text-only (T2VA) or attached images (I2VA/FL2VA/L2VA).",
      },
    },
  },
};

const H3_GUIDE = [
  "# Video Prompt Writing Guide (T2VA / I2VA / FL2VA / L2VA)",
  "",
  "## 1. Task Overview",
  "",
  "- **T2VA**: Builds a complete audiovisual timeline from text.",
  "- **I2VA**: T2VA body + first-frame instruction + a visual path that develops forward from the first frame.",
  "- **FL2VA**: T2VA body + first-and-last-frame instruction + a continuous path from the first frame to the last frame.",
  "- **L2VA**: T2VA body + last-frame instruction + a path that converges from a plausible preceding state to the last frame.",
  "",
  "## 2. Final Prompt Structure",
  "",
  "### 2.1 Part One Is the Instruction",
  "",
  "**T2VA** has no image-alignment instruction and begins directly with the three core fields.",
  "",
  "**I2VA** always uses:",
  "",
  "```text",
  "For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.",
  "```",
  "",
  "**FL2VA** always uses:",
  "",
  "```text",
  "How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the S.SS-second mark of the target video.",
  "```",
  "",
  "**L2VA** always uses:",
  "",
  "```text",
  "How the reference pictures align with the target video — <Picture 1> (from [Shot N]) aligns with the S.SS-second mark of the target video.",
  "```",
  "",
  "Here, `N` is the index of the actual final shot, and `S.SS` is the effective video duration formatted to exactly two decimal places. The instruction must be the first line of the final prompt, followed by one blank line before the core fields.",
  "",
  "### 2.2 Part Two Contains the Three Core Fields",
  "",
  "```text",
  "integrated_multimodal_description: [Shot 1] ...",
  "",
  "overall_soundscape: ...",
  "",
  "non_diegetic_music: ...",
  "```",
  "",
  "- **integrated_multimodal_description**: Describes visuals, actions, shots, speakers, dialogue, singing, and diegetic audio along the timeline.",
  "- **overall_soundscape**: Summarizes ambient sound, physical action sounds, and non-verbal human sounds across the entire video.",
  "- **non_diegetic_music**: Describes background music that the characters cannot hear and only the audience can hear.",
  "",
  "## 3. How to Incorporate Keyframes into the Multimodal Description",
  "",
  "### 3.1 I2VA: Begin from the Image and Develop Forward",
  "",
  "`<Picture 1>` is the actual first frame of the video at 0.00 seconds and belongs to `[Shot 1]`. The description should first establish the style, subjects, composition, and scene anchors in the image, then describe the next action. Character identity, clothing, colors, key objects, and spatial relationships should remain consistent.",
  "",
  "Recommended structure: **first-frame anchor → action onset → continuous development → result or reaction**.",
  "",
  "### 3.2 FL2VA: Describe the Path Between the First and Last Frames",
  "",
  "Picture 1 is the opening, and Picture 2 is the ending. Focus on how the subject moves, how poses change, how objects are manipulated, how the composition evolves, and how the scene or lighting transitions.",
  "",
  "FL2VA generally favors a single shot so the model can interpolate continuously from the first frame to the last frame. Use multiple shots only when they are explicitly specified. The last frame must be reached by the final `[Shot N]` at the end of the video.",
  "",
  "Recommended structure: **first-frame state → observable intermediate changes → progressively narrowing differences → last-frame state**.",
  "",
  "### 3.3 L2VA: Infer the Opening and Land on the Image at the End",
  "",
  "`<Picture 1>` is the final frame of the video and belongs to the last `[Shot N]`; it does not inherently belong to Shot 1. Infer a plausible earlier state from the user's intent and the last frame, then describe how the characters, objects, camera, and scene gradually approach the reference image.",
  "",
  "Recommended structure: **plausible preceding state → explicit action and transition path → gradual convergence in the final shot → last-frame landing**.",
  "",
  "## 4. How to Write the Three Shared Core Sections",
  "",
  "### 4.1 Develop the Multimodal Description Along the Timeline",
  "",
  "`integrated_multimodal_description` is the main body of the rewritten prompt. Every detail should correspond to something visible or audible: visual style, initial composition, subject appearance and position, scene and key props, actions and reactions, shot changes, spoken language, and synchronized diegetic sound.",
  "",
  "At the beginning of `[Shot 1]`, state the overall style and initial composition. Common styles include `Cinematic`, `live-action`, `2D-animated`, `3D CG`, `claymation`, `watercolor`, and `vintage film`. For keyframe tasks, derive the style from the reference image; for T2VA, select it from the user's text.",
  "",
  "```text",
  "[Shot 1] Live-action, cinematic, a medium-wide shot frames...",
  "```",
  "",
  "### 4.2 Shots and Cuts",
  "",
  "Do not add a timestamp to the first shot. Use sequential shot numbers for later shots, and begin each one with a strictly increasing cut time that falls within the video duration:",
  "",
  "```text",
  "[Shot 2] At 00:03.500, the camera cuts to...",
  "```",
  "",
  "For ordinary cuts, use `the camera cuts to`, `the shot cuts to`, `the shot transitions to`, `the shot changes to`, or `the shot switches to`. When explicitly requested by the user, cross-dissolve, fade, or wipe may also be used. A cut should introduce new information about the subject, space, state, viewpoint, or time. If only the distance or a slight angle needs to change, prefer camera motion.",
  "",
  "### 4.3 Camera Motion: Motion Type + Amplitude + Speed",
  "",
  "A complete camera-motion expression has three dimensions: the **motion type** defines how the camera moves, **amplitude** defines the range of compositional change, and **speed** defines the pacing of that change. Add amplitude and speed only when they are meaningful; medium amplitude and normal speed are usually omitted.",
  "",
  "| Dimension | Available Expression | Description |",
  "|-|-|-|",
  "| Motion type | `Zoom In / Zoom Out` | The focal length changes while the camera body remains stationary |",
  "| Motion type | `Push In / Pull Out` | The camera moves forward / backward |",
  "| Motion type | `Pan Left / Pan Right` | The camera remains in place while the lens pivots horizontally |",
  "| Motion type | `Truck Left / Truck Right` | The camera translates horizontally |",
  "| Motion type | `Tilt Up / Tilt Down` | The camera remains in place while the lens pivots vertically |",
  "| Motion type | `Pedestal Up / Pedestal Down` | The entire camera moves upward / downward |",
  "| Motion type | `Arc Shot` | The camera moves in an arc around the subject |",
  "| Motion type | `Tracking Shot` | The camera follows a moving subject |",
  "| Motion type | `Static Shot` | The camera position and lens remain still |",
  "| Motion type | `Shake Slightly / Shake Strongly` | Slight / strong camera shake |",
  "| Motion type | `POV` | The subject's point of view |",
  "| Motion type | `Roll Clockwise / Roll Counterclockwise` | The camera rolls clockwise / counterclockwise around the lens axis |",
  "| Amplitude | `with small amplitude` | Small-range change |",
  "| Amplitude | `with large amplitude` | Large-range change |",
  "| Speed | `at slow speed` | Slow movement |",
  "| Speed | `at fast speed` | Fast movement |",
  "",
  "Camera motion should be written as a natural English action within the shot, rather than stacked as separate labels at the end of a sentence:",
  "",
  "```text",
  "The camera pushes in with small amplitude at slow speed toward the folded letter in her hands.",
  "The camera pans right with large amplitude at fast speed, revealing the open doorway.",
  "The camera holds a static shot as the runner exits the frame.",
  "```",
  "",
  "### 4.4 Speakers, Dialogue, and Singing",
  "",
  "Subjects who speak, sing, or produce an off-screen human voice use stable IDs such as `(S1)` and `(S2)`. When multiple already-numbered speakers speak or sing together, use a compound ID such as `(S1,S2)`. A speaker keeps the same ID across shots; characters who never vocalize receive no speaker ID.",
  "",
  "When a speaker first appears, provide enough information from the visual and audio context to establish a stable identity, such as character type, age, gender, whether the person is on-screen, pitch, timbre, speaking rate, or accent. Place the speaker's identifying phrase, ID, action, and delivery outside `<d>`. Inside `<d>`, include only the language tag and the actual user-provided spoken content. Preserve every original word and punctuation mark verbatim; do not translate or rewrite them.",
  "",
  "```text",
  "The young woman with a quiet, breathy voice (S1) says: <d>[English] I get off at the next station.</d>",
  "The two children (S1,S2) shout together, <d>[English] Wait for us!</d>",
  "```",
  "",
  "For voiceover, use the exact phrase `says in an off-screen voiceover`. Immediately after every voiceover `<d>` block, state that the corresponding on-screen character's lips remain closed:",
  "",
  "```text",
  "The man (S1) says in an off-screen voiceover: <d>[English] I still remember that road.</d> while his lips remain completely closed.",
  "```",
  "",
  "When the same line of dialogue or lyrics crosses a cut, use `<scenetrans>` at the connecting points in both parts and explicitly state that the audio continues across the cut. Use `<cutoff>` when speech is truncated by the end of the video. Continuity may be expressed with `continues seamlessly across the cut`, `continues uninterrupted into the next shot`, `carries over from the previous shot`, or `remains audible across the transition`.",
  "",
  "### 4.5 On-Screen Text",
  "",
  "Place any banner, sign, label, subtitle, or neon text that is actually visible on screen in English double quotation marks. Preserve the original text and punctuation verbatim, without translation.",
  "",
  "```text",
  "A red neon sign reading \"营业中\" glows above the doorway.",
  "```",
  "",
  "### 4.6 overall_soundscape",
  "",
  "Use 1–4 English sentences in one continuous paragraph to summarize the ambient sound, physical action sounds, and non-verbal human sounds across the full video, such as wind, rain, traffic, footsteps, fabric movement, impacts, breathing, laughter, or panting. Dialogue, singing, and diegetic music already belong in the multimodal description and should not be repeated here. Use `N/A` only when the user explicitly requests complete silence throughout the video.",
  "",
  "```text",
  "overall_soundscape: Steady rain taps against the café windows while low room ambience continues underneath. The entrance bell rings once, followed by wet footsteps and the soft scrape of a chair.",
  "```",
  "",
  "### 4.7 non_diegetic_music",
  "",
  "Use 1–3 English sentences to describe background music that the characters cannot hear and only the audience can hear. Focus on instrumentation, speed, rhythm, and dynamic changes; do not use abstract mood words or explain the emotional function of the score. Singing, instruments, radio, television, or phone music audible to the characters are diegetic events and should appear in the multimodal description. Use `N/A` when there is no non-diegetic music.",
  "",
  "```text",
  "non_diegetic_music: Sparse piano notes at a slow tempo, joined by sustained low strings that gradually increase in volume before fading out.",
  "```",
  "",
  "## 5. Cases",
  "",
  "### Case 1: T2VA",
  "",
  "With no reference image, construct the complete timeline directly from the text. You may add scene, character, action, and sound details that remain consistent with the user's intent.",
  "",
  "```text",
  "integrated_multimodal_description: [Shot 1] Live-action, cinematic, a medium-wide shot frames a baker opening the shutters of a small street bakery before sunrise. The camera pushes in with small amplitude at slow speed as the middle-aged baker with a calm, slightly raspy voice (S1) places a fresh loaf on the wooden counter and says: <d>[English] First batch of the morning.</d> [Shot 2] At 00:05.000, the camera cuts to a close-up of steam rising from the sliced bread while the baker's final words carry over from the previous shot.",
  "",
  "overall_soundscape: Wooden shutters scrape open over a quiet street as trays clink softly inside the bakery. The doorbell rings once, followed by light footsteps and the crisp sound of bread being sliced.",
  "",
  "non_diegetic_music: A soft acoustic-guitar pattern at a moderate tempo, joined by sparse upright-bass notes and a gentle fade at the end.",
  "```",
  "",
  "### Case 2: I2VA",
  "",
  "Write the first-frame instruction first, then use the subject, composition, and scene in Picture 1 as the starting point of Shot 1 before describing how the scene continues to develop.",
  "",
  "```text",
  "For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.",
  "",
  "integrated_multimodal_description: [Shot 1] Live-action, cinematic, the young woman shown in <Picture 1> remains beside the rain-covered train window, preserving her appearance, clothing, seat position, and the carriage layout. The camera trucks right with small amplitude at slow speed as she lifts her gaze from the folded letter toward the passing city lights. Her reflection moves across the glass while the quiet, breathy young woman (S1) says: <d>[English] I get off at the next station.</d> She folds the letter along its existing crease.",
  "",
  "overall_soundscape: The train wheels produce a steady metallic rhythm beneath a low ventilation hum. Rain ticks against the window while paper rustles softly in her hands.",
  "",
  "non_diegetic_music: Sustained cello notes at a slow tempo with widely spaced piano tones, gradually decreasing in volume.",
  "```",
  "",
  "### Case 3: FL2VA",
  "",
  "The two images anchor the opening and ending respectively. The body should not repeat two static image descriptions; instead, it should supply the motion path that connects them. The following example is an eight-second single shot.",
  "",
  "```text",
  "How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot 1) aligns with the 8.00-second mark of the target video.",
  "",
  "integrated_multimodal_description: [Shot 1] Live-action, cinematic, a rain-soaked cyclist begins in the position and framing established by Picture 1, holding a closed black umbrella beside a silver bicycle. The camera pulls out with small amplitude at slow speed as she releases the bicycle handle, raises the umbrella above her shoulder, and presses the runner upward until the canopy opens. Water rolls from the expanding fabric while she steps beneath it, rotates the handle into the final angle, and settles into the pose, spacing, and composition established by Picture 2 at the end of the shot.",
  "",
  "overall_soundscape: Rain falls steadily on the pavement, followed by the metallic click of the umbrella runner and the soft snap of the canopy opening. Water drips from the bicycle frame as distant traffic passes.",
  "",
  "non_diegetic_music: N/A",
  "```",
  "",
  "### Case 4: L2VA",
  "",
  "The image anchors only the final moment. First establish a compatible earlier state, then let the actions, object states, and composition gradually land on Picture 1 in the final shot. The following example is a six-second single shot.",
  "",
  "```text",
  "How the reference pictures align with the target video — <Picture 1> (from [Shot 1]) aligns with the 6.00-second mark of the target video.",
  "",
  "integrated_multimodal_description: [Shot 1] Live-action, cinematic, a close shot begins with an intact drinking glass near the edge of a dark wooden table, while the same hand and sleeve visible in <Picture 1> approach from the right. The camera pushes in with small amplitude at slow speed as the fingertips strike the rim. The glass tips, falls, and hits the floor with a sharp impact; cracks spread through it as fragments slide outward. Toward the end, the moving pieces lose momentum and settle into the exact broken arrangement, hand position, camera angle, lighting, and final composition established by <Picture 1>.",
  "",
  "overall_soundscape: Fingertips tap the glass before it scrapes across the tabletop, falls, and breaks with a sharp crash. Small fragments scatter and gradually stop sliding across the floor.",
  "",
  "non_diegetic_music: A low electronic pulse at a slow tempo, ending immediately after the glass breaks.",
  "```",
].join("\n");

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
  {
    id: "generalimage",
    systemInstruction: "Make detailed natural language Image generation prompt in English based on Source.",
    userTemplate: ({ source }) =>
      [
        `Your response will only be the prompt, nothing else.
Source: ${source}`,
      ].join("\n"),
  },
  {
    id: "generalvideo",
    systemInstruction: "You are a helpful assistant that refines and enhances prompts for video generation models",
    userTemplate: ({ source }) =>
      [
        `
Your task is to take the user's attached image, and based on the image create a natural animation prompt. Produce detailed, and actionable prompt that can be effectively used by an video generation model to create the desired output.
            
General Guidelines
Use natural language to describe specific actions — avoid abstract concepts or keyword-stuffed phrases like in traditional AI image generation.

✅ "The girl slowly lifts her right hand to adjust her sunglasses."
❌ "Girl, hand, sunglasses, cool pose, stylish."
❌ "Doing something cool with her hands."
Focus on one action per shot. Don't describe multiple actions in a single prompt, or the model may not be able to complete them within 5 seconds.

✅ "The man waves his hand and smiles at the camera."
❌ "The man walks into the room, picks up a book, reads a bit, then waves."
❌ "She turns, waves, and jumps in excitement."
Be specific about which body parts are involved, what kind of clothing is worn, and what exactly is happening — avoid vague terms like 'clothes'.

✅ "She pulls down the hood of her gray hoodie with both hands."
❌ "She fixes her clothes."
❌ "The character interacts with her outfit."
Avoid overly complex or large movements for now, such as bending over or torso twisting, as they may result in glitches or fail to render properly.

✅ "He raises his left arm and points forward."
❌ "She bends down to tie her shoes."
❌ "The dancer spins twice and stretches backward."

Examples
✅ Clear, specific action with natural phrasing, The woman winks at the camera while gently adjusting her hair.

🟡 Action is completed but feels vague or disconnected. A young man raises his arm and looks down at his wristwatch.

🟥 Too many actions stacked; difficult to complete in time. The woman kneels down, opens a backpack, takes out a book, and waves.

🟥 Multiple steps, only the first action may be completed. The child bounces a ball and then tries to jump and spin.

🟥 Too slow; the action doesn't finish in 5 seconds. The man slowly opens a wrapped gift box, carefully lifting the lid and removing the ribbon.

🟥 Too vague; lacks body part or clothing details. Subject adjusts their outfit and interacts with it.

Example:
Original Prompt: "A Viking warrior wields a
great axe with both hands,
battling a mammoth at dusk,
amidst a snowy landscape
with snowflakes swirling in
the air."

Enhanced: "An epic battle scene, unfolds as a tall and muscular Viking war-
rior wields a heavy great axe with both hands, facing off against
a massive mammoth. The warrior is clad in leather armor and a
horned helmet, with prominent muscles and a fierce, determined
expression. The mammoth is covered in long hair, with sharp
tusks, and roars angrily. It is dusk, and the snowy landscape is
filled with swirling snowflakes, creating an intense and dramatic
atmosphere. The backdrop features a barren ice field with the
faint outlines of distant mountains. The use of cool-toned light-
ing emphasizes strength and bravery. The scene is captured in a
dynamic close-up shot from a high-angle perspective."

Your response should be only a single, coherent paragraph of prompt. Avoid adding new concepts that are not present in the original prompt, and do not include any meta commentary or instructions in your response.
Source: ${source}`,
      ].join("\n"),
  },
  {
    id: "minimaxh3",
    systemInstruction:
      "You are a video prompt architect for the MiniMax-H3 video generation model. Rewrite the user's source text (and any attached reference images) into the exact final prompt defined by the H3 writing guide. Respond with the final prompt only — no explanations, no markdown around it.",
    userTemplate: ({ source, imageCount = 0 }) =>
      [
        H3_GUIDE,
        "",
        "# Reference Images Attached to This Request",
        "- Images attached to this request become <Picture 1>, <Picture 2>, ... in attachment order.",
        `- Number of attached images: ${imageCount}`,
        imageCount === 0
          ? "- No image is attached: treat this as T2VA unless the user explicitly asks for a keyframe task."
          : imageCount === 1
            ? "- Exactly one image is attached: use I2VA by default (the image is the first frame). Use L2VA only when the user clearly presents the image as the final or ending state."
            : imageCount === 2
              ? "- Exactly two images are attached: use FL2VA. The first attached image is Picture 1 (first frame) and the second is Picture 2 (last frame)."
              : "- More than two images are attached: use at most the two that best serve as the first and last frames and ignore the rest; fall back to T2VA if a keyframe task is impossible.",
        "- Never reference images that were not actually attached. If the chosen mode requires a picture that is missing, fall back to T2VA.",
        "",
        "Rewrite the source text below into the final prompt, strictly following the guide.",
        `Source: ${source}`,
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

const MAX_IMAGES = 4;
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];
const attachedImages = [];

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
const attachBtn = document.getElementById("attach-btn");
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");
const sourceCard = document.getElementById("source-card");

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

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error || new Error("FileReader failed"));
    reader.readAsDataURL(file);
  });
}

async function addImageFiles(fileList) {
  const files = Array.from(fileList || []);
  if (files.length === 0) {
    return;
  }

  let addedCount = 0;
  for (const file of files) {
    const mimeType = (file.type || "").toLowerCase();
    if (!ALLOWED_IMAGE_TYPES.includes(mimeType)) {
      setStatus(t("errors.imageBadType", { name: file.name }), "error");
      continue;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setStatus(t("errors.imageTooLarge", { name: file.name, size: MAX_IMAGE_BYTES / (1024 * 1024) }), "error");
      continue;
    }
    if (attachedImages.length >= MAX_IMAGES) {
      setStatus(t("errors.tooManyImages", { max: MAX_IMAGES }), "error");
      break;
    }

    try {
      const dataUrl = await readFileAsDataURL(file);
      attachedImages.push({
        name: file.name,
        mimeType,
        dataUrl,
        base64: dataUrl.slice(dataUrl.indexOf(",") + 1),
      });
      addedCount += 1;
    } catch (_) {
      setStatus(t("errors.imageReadFailed", { name: file.name }), "error");
    }
  }

  if (addedCount > 0) {
    setStatus(t("status.imagesAdded", { count: attachedImages.length }), "ok");
  }
  renderImagePreview();
}

function removeImage(index) {
  attachedImages.splice(index, 1);
  renderImagePreview();
}

function renderImagePreview() {
  imagePreview.innerHTML = "";

  attachedImages.forEach((image, index) => {
    const thumb = document.createElement("div");
    thumb.className = "image-thumb";

    const img = document.createElement("img");
    img.src = image.dataUrl;
    img.alt = image.name;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "thumb-remove";
    removeBtn.textContent = "×";
    removeBtn.title = t("actions.removeImage");
    removeBtn.setAttribute("aria-label", t("actions.removeImage"));
    removeBtn.addEventListener("click", () => removeImage(index));

    thumb.append(img, removeBtn);
    imagePreview.appendChild(thumb);
  });

  imagePreview.classList.toggle("is-empty", attachedImages.length === 0);
  attachBtn.disabled = attachedImages.length >= MAX_IMAGES;
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
  if (!sourcePrompt.value.trim() && attachedImages.length === 0) {
    throw new Error(t("errors.sourceRequired"));
  }
}

async function callChatCompletions({ endpoint, apiKey, model, systemInstruction, userPrompt, images = [], maxTokens }) {
  const userContent =
    images.length > 0
      ? [
          { type: "text", text: userPrompt },
          ...images.map((image) => ({ type: "image_url", image_url: { url: image.dataUrl } })),
        ]
      : userPrompt;

  const payload = {
    model,
    messages: [
      { role: "system", content: systemInstruction },
      { role: "user", content: userContent },
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

async function callAnthropic({ endpoint, apiKey, model, systemInstruction, userPrompt, images = [], maxTokens }) {
  const userContent =
    images.length > 0
      ? [
          ...images.map((image) => ({
            type: "image",
            source: { type: "base64", media_type: image.mimeType, data: image.base64 },
          })),
          { type: "text", text: userPrompt },
        ]
      : userPrompt;

  const payload = {
    model,
    max_tokens: maxTokens ?? 1200,
    system: systemInstruction,
    messages: [{ role: "user", content: userContent }],
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
    const images = attachedImages.map((image) => ({ ...image }));
    const userPrompt = preset.userTemplate({ source: sourcePrompt.value.trim(), imageCount: images.length });

    let result = "";
    if (provider === "anthropic") {
      result = await callAnthropic({ endpoint, apiKey, model, systemInstruction: preset.systemInstruction, userPrompt, images, maxTokens });
    } else {
      result = await callChatCompletions({ endpoint, apiKey, model, systemInstruction: preset.systemInstruction, userPrompt, images, maxTokens });
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

  attachBtn.addEventListener("click", () => imageInput.click());

  imageInput.addEventListener("change", () => {
    addImageFiles(imageInput.files);
    imageInput.value = "";
  });

  ["dragenter", "dragover"].forEach((type) => {
    sourceCard.addEventListener(type, (event) => {
      event.preventDefault();
      sourceCard.classList.add("is-dragover");
    });
  });

  ["dragleave", "dragend"].forEach((type) => {
    sourceCard.addEventListener(type, () => {
      sourceCard.classList.remove("is-dragover");
    });
  });

  sourceCard.addEventListener("drop", (event) => {
    event.preventDefault();
    sourceCard.classList.remove("is-dragover");
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      addImageFiles(files);
    }
  });

  sourcePrompt.addEventListener("paste", (event) => {
    const files = Array.from(event.clipboardData?.items || [])
      .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
      .map((item) => item.getAsFile())
      .filter(Boolean);
    if (files.length > 0) {
      event.preventDefault();
      addImageFiles(files);
    }
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
