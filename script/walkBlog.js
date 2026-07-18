// 이 파일은 산책 게시글 표시, 필터, 상세 보기, 관심 코스 저장을 담당한다.

// 공개할 게시글은 localStorage가 아니라 이 배열에 작성한다.
// slides 안의 image, imageAlt, title, description을 바꾸면 상세 카드에 반영된다.
const walkPosts = [
    {
        id: "asakusa-riverside",
        title: "아사쿠사와 스미다강",
        area: "east",
        areaLabel: "동부 도쿄 · 아사쿠사, 스카이트리",
        moods: ["riverside", "night"],
        moodLabel: "강변, 야경",
        duration: "90분이상 (천천히 둘러보기 좋은 곳)",
        distance: "약 1.6km",
        image: "../media/walk-asakusa01-sensoji.jpg",
        imageAlt: "아사쿠사와 스미다강 산책 대표 풍경",
        summary: "전통적인 거리부터 도쿄 최신의 전망대까지",
        slides: [
            {
                image: "../media/walk-asakusa01-sensoji.jpg",
                imageAlt: "산책을 시작하는 센소지 풍경",
                title: "센소지에서 출발",
                description: "도쿄 최고, 최초의 사찰을 느껴보자"
            },
            {
                image: "../media/walk-asakusa02-nakamichi.jpg",
                imageAlt: "작은 상점과 간식 가게가 이어진 나카미세 거리",
                title: "나카미세 거리",
                description: "인파를 뚫고 작은 상점과 간식 가게가 이어지는 거리에서 군것질"
            },
            {
                image: "../media/walk-asakusa03-bunkakankou.jpg",
                imageAlt: "아사쿠사 문화관광 센터에서 바라본 센소지와 나카미세 거리",
                title: "아사쿠사 문화관광 센터",
                description: "유명 건축가 쿠마 켄고의 작품. 엘리베이터를 타고 올라가면 지나왔던 나카미세 거리, 센소지가 보인다!",
                isTip: true
            },
            {
                image: "../media/walk-asakusa04-riverwalk.jpg",
                imageAlt: "스미다강을 건너는 스미다 리버 워크",
                title: "스미다 리버 워크",
                description: "스미다 강을 걸어서 건너가보자"
            },
            {
                image: "../media/walk-asakusa05-skytree.jpg",
                imageAlt: "산책의 마지막 장소인 도쿄 스카이트리",
                title: "도쿄 스카이트리",
                description: "그 유명한 도쿄 스카이트리 좋은 시간대에 전망대를 보려면 미리 예매 필수! soramachi라는곳에 여러 점포들도 입점해있어 식사및 쇼핑도 충분히 가능🤓",
                isTip: true
            }
        ]
    },
    {
        id: "ueno-art-shopping",
        title: "우에노 공원에서 아메요코까지",
        area: "east",
        areaLabel: "동부 도쿄 · 우에노",
        moods: ["culture", "shopping", "night"],
        moodLabel: "예술, 쇼핑, 이자카야",
        duration: "4시간 이상 (전시 관람 포함)",
        distance: "약 2.5km",
        image: "../media/walk-ueno01-museum.jpg",
        imageAlt: "우에노 공원의 국립서양미술관 본관",
        summary: "미술관과 예술대학을 지나 아메요코의 밤까지",
        slides: [
            {
                image: "../media/walk-ueno01-museum.jpg",
                imageAlt: "르 코르뷔지에가 설계한 국립서양미술관 본관",
                title: "국립서양미술관",
                description: "세계유산에 포함된 르 코르뷔지에의 건축과 마쓰카타 컬렉션을 함께 감상하자"
            },
            {
                image: "../media/walk-ueno02-geidai.jpg",
                imageAlt: "도쿄예술대학 우에노 캠퍼스 건물",
                title: "도쿄예술대학 우에노 캠퍼스",
                description: "캠퍼스의 건축을 둘러보고 미술관의 공개 전시와 행사 일정도 확인해 보자",
                isTip: true
            },
            {
                image: "../media/walk-ueno03-ameyoko.jpg",
                imageAlt: "상점이 빽빽하게 이어지는 아메요코 시장 거리",
                title: "아메요코 쇼핑",
                description: "약 500m의 골목에서 의류와 잡화, 간식을 보물찾기하듯 구경해 보자"
            },
            {
                image: "../media/walk-ueno04-hinoya.jpg",
                imageAlt: "의류와 잡화 상점이 모인 아메요코 거리",
                title: "HINOYA에서 데님 찾기",
                description: "우에노의 HINOYA 본점에서 일본 데님과 아메리칸 캐주얼 브랜드를 살펴보자"
            },
            {
                image: "../media/walk-ueno05-izakaya.jpg",
                imageAlt: "이자카야 간판과 불빛이 이어지는 밤의 우에노 거리",
                title: "아메요코 이자카야",
                description: "철도 고가 주변의 캐주얼한 이자카야에서 꼬치와 한잔으로 코스를 마무리하자"
            }
        ]
    },
    {
        id: "disneysea-waterfront",
        title: "디즈니씨의 물가를 따라",
        area: "bay",
        areaLabel: "도쿄 베이 · 도쿄 디즈니씨",
        moods: ["themepark"],
        moodLabel: "테마파크",
        duration: "반나절 이상 (대기시간에 따라 달라요)",
        distance: "파크 동선에 따라 달라요",
        image: "../media/walk-disney01-soaring.jpg",
        imageAlt: "도쿄 디즈니씨 메디테러니언 하버의 수변 풍경",
        summary: "하늘과 바다, 동화 세계를 오가는 추천 어트랙션 5선",
        slides: [
            {
                image: "../media/walk-disney01-soaring.jpg",
                imageAlt: "소어링이 있는 메디테러니언 하버의 풍경",
                title: "소어링: 판타스틱 플라이트",
                description: "드림 플라이어를 타고 세계의 명소 위를 나는 듯한 약 5분의 비행을 즐겨보자"
            },
            {
                image: "../media/walk-disney02-peterpan.jpg",
                imageAlt: "피터팬의 네버랜드 어드벤처가 있는 네버랜드 풍경",
                title: "피터팬의 네버랜드 어드벤처",
                description: "피터팬과 팅커벨을 따라 후크 선장에게 붙잡힌 존을 구하는 약 6분의 모험"
            },
            {
                image: "../media/walk-disney03-sindbad.jpg",
                imageAlt: "신드바드의 모험을 표현한 아라비안 코스트의 풍경",
                title: "신드바드 스토리북 보야지",
                description: "찬두와 함께 보트를 타고 앨런 멩컨의 음악이 흐르는 약 10분의 항해를 즐기자"
            },
            {
                image: "../media/walk-disney04-frozen.jpg",
                imageAlt: "안나와 엘사의 프로즌 저니가 있는 프로즌 킹덤 풍경",
                title: "안나와 엘사의 프로즌 저니",
                description: "영화의 명곡과 함께 두 자매의 이야기를 따라가는 약 6분 30초의 보트 라이드"
            },
            {
                image: "../media/walk-disney05-rapunzel.jpg",
                imageAlt: "라푼젤의 랜턴 페스티벌이 있는 라푼젤의 숲 풍경",
                title: "라푼젤의 랜턴 페스티벌",
                description: "라푼젤과 플린의 최고의 날을 따라 등불 축제로 향하는 약 5분의 로맨틱한 항해"
            }
        ]
    }
];

const WALK_FAVORITE_KEY = "skala-walk-favorites";

const areaFilter = document.querySelector("#walk-area-filter");
const moodFilter = document.querySelector("#walk-mood-filter");
const favoriteOnly = document.querySelector("#walk-favorite-only");
const resetButton = document.querySelector("#walk-filter-reset");
const postList = document.querySelector("#walk-post-list");
const resultCount = document.querySelector("#walk-result-count");
const emptyMessage = document.querySelector("#walk-empty");
const dialog = document.querySelector("#walk-dialog");
const dialogContent = document.querySelector("#walk-dialog-content");
const dialogCloseButton = document.querySelector("#walk-dialog-close");

let favoritePostIds = loadFavoritePostIds();

// 저장된 관심 코스 id 배열을 불러온다.
function loadFavoritePostIds() {
    try {
        const savedIds = JSON.parse(localStorage.getItem(WALK_FAVORITE_KEY));
        return Array.isArray(savedIds) ? savedIds : [];
    } catch (error) {
        console.error("관심 코스를 불러오지 못했습니다.", error);
        return [];
    }
}

function saveFavoritePostIds() {
    try {
        localStorage.setItem(WALK_FAVORITE_KEY, JSON.stringify(favoritePostIds));
    } catch (error) {
        console.error("관심 코스를 저장하지 못했습니다.", error);
    }
}

function isFavorite(postId) {
    return favoritePostIds.includes(postId);
}

// 사용자가 선택한 지역, 분위기, 관심 여부를 모두 만족하는 글만 반환한다.
function getFilteredPosts() {
    return walkPosts.filter((post) => {
        const matchesArea = areaFilter.value === "all" || post.area === areaFilter.value;
        const matchesMood = moodFilter.value === "all" || post.moods.includes(moodFilter.value);
        const matchesFavorite = !favoriteOnly.checked || isFavorite(post.id);

        return matchesArea && matchesMood && matchesFavorite;
    });
}

function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
}

// 한 개의 게시글 객체를 화면에 보이는 카드로 만든다.
function createWalkCard(post) {
    const article = document.createElement("article");
    const image = document.createElement("img");
    const body = document.createElement("div");
    const topRow = document.createElement("div");
    const area = createTextElement("span", "walk-card-area", post.areaLabel);
    const favoriteButton = document.createElement("button");
    const title = createTextElement("h3", "walk-card-title", post.title);
    const summary = createTextElement("p", "walk-card-summary", post.summary);
    const meta = document.createElement("div");
    const mood = createTextElement("span", "walk-card-tag", `# ${post.moodLabel}`);
    const duration = createTextElement("span", "walk-card-meta", `⏱ ${post.duration}`);
    const distance = createTextElement("span", "walk-card-meta", `↔ ${post.distance}`);
    const detailButton = document.createElement("button");

    article.className = "walk-card";
    article.dataset.id = post.id;

    image.className = "walk-card-image";
    image.src = post.image;
    image.alt = post.imageAlt;

    body.className = "walk-card-body";
    topRow.className = "walk-card-top-row";
    meta.className = "walk-card-info";

    favoriteButton.type = "button";
    favoriteButton.className = isFavorite(post.id)
        ? "walk-favorite-button walk-favorite-button--active"
        : "walk-favorite-button";
    favoriteButton.dataset.action = "favorite";
    favoriteButton.textContent = isFavorite(post.id) ? "★ 저장됨" : "☆ 관심";
    favoriteButton.setAttribute("aria-pressed", String(isFavorite(post.id)));
    favoriteButton.setAttribute("aria-label", `${post.title} 관심 코스 저장`);

    detailButton.type = "button";
    detailButton.className = "walk-detail-button";
    detailButton.dataset.action = "detail";
    detailButton.textContent = "코스 자세히 보기";

    topRow.append(area, favoriteButton);
    meta.append(mood, duration, distance);
    body.append(topRow, title, summary, meta, detailButton);
    article.append(image, body);

    return article;
}

function renderWalkPosts() {
    const filteredPosts = getFilteredPosts();
    postList.replaceChildren();

    filteredPosts.forEach((post) => {
        postList.append(createWalkCard(post));
    });

    resultCount.textContent = `${filteredPosts.length}개의 코스`;
    emptyMessage.hidden = filteredPosts.length > 0;
}

// slides 배열의 사진과 짧은 설명을 한 장씩 넘겨 보는 게시글을 만든다.
function createPostCarousel(post) {
    const carousel = document.createElement("article");
    const imageWrap = document.createElement("div");
    const image = document.createElement("img");
    const badges = document.createElement("div");
    const status = createTextElement("span", "walk-carousel-status", "");
    const body = document.createElement("div");
    const courseTitle = createTextElement("h2", "walk-carousel-course", post.title);
    const tipBadge = createTextElement("span", "walk-carousel-tip", "꿀팁");
    const slideTitle = createTextElement("h3", "walk-carousel-title", "");
    const description = createTextElement("p", "walk-carousel-description", "");
    const controls = document.createElement("div");
    const previousButton = document.createElement("button");
    const nextButton = document.createElement("button");
    const dots = document.createElement("div");
    const dotButtons = [];
    let currentIndex = 0;
    let touchStartX = 0;

    carousel.className = "walk-post-carousel";
    carousel.tabIndex = 0;
    carousel.setAttribute("aria-label", `${post.title} 사진 게시글`);

    imageWrap.className = "walk-carousel-image-wrap";
    image.className = "walk-carousel-image";
    badges.className = "walk-carousel-badges";
    body.className = "walk-carousel-body";
    body.setAttribute("aria-live", "polite");
    tipBadge.hidden = true;
    courseTitle.id = "walk-dialog-title";
    controls.className = "walk-carousel-controls";
    dots.className = "walk-carousel-dots";
    dots.setAttribute("role", "group");
    dots.setAttribute("aria-label", "사진 바로 이동");

    previousButton.type = "button";
    previousButton.className = "walk-carousel-button";
    previousButton.textContent = "← 이전";
    previousButton.setAttribute("aria-label", "이전 사진 보기");

    nextButton.type = "button";
    nextButton.className = "walk-carousel-button walk-carousel-button--next";
    nextButton.textContent = "다음 →";
    nextButton.setAttribute("aria-label", "다음 사진 보기");

    // 사진 파일이 아직 없다면 코스 대표 사진을 대신 보여 준다.
    image.addEventListener("error", () => {
        if (image.getAttribute("src") !== post.image) {
            image.src = post.image;
            image.alt = post.imageAlt;
        }
    });

    // 현재 번호의 사진, 제목, 설명과 버튼 상태를 함께 바꾼다.
    function renderSlide() {
        const slide = post.slides[currentIndex];

        image.src = slide.image;
        image.alt = slide.imageAlt;
        status.textContent = `${currentIndex + 1} / ${post.slides.length}`;
        tipBadge.hidden = !slide.isTip;
        slideTitle.textContent = slide.title;
        description.textContent = slide.description;

        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === post.slides.length - 1;

        dotButtons.forEach((button, index) => {
            const isCurrent = index === currentIndex;
            button.classList.toggle("walk-carousel-dot--active", isCurrent);
            button.setAttribute("aria-current", isCurrent ? "step" : "false");
        });
    }

    post.slides.forEach((slide, index) => {
        const dotButton = document.createElement("button");
        dotButton.type = "button";
        dotButton.className = "walk-carousel-dot";
        dotButton.setAttribute("aria-label", `${index + 1}번째 사진 ${slide.title} 보기`);
        dotButton.addEventListener("click", () => {
            currentIndex = index;
            renderSlide();
        });
        dotButtons.push(dotButton);
        dots.append(dotButton);
    });

    previousButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            renderSlide();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < post.slides.length - 1) {
            currentIndex += 1;
            renderSlide();
        }
    });

    // 카드 영역에 초점이 있으면 키보드 방향키로도 사진을 넘길 수 있다.
    carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && currentIndex > 0) {
            currentIndex -= 1;
            renderSlide();
            event.preventDefault();
        }

        if (event.key === "ArrowRight" && currentIndex < post.slides.length - 1) {
            currentIndex += 1;
            renderSlide();
            event.preventDefault();
        }
    });

    // 모바일에서는 사진을 좌우로 50px 이상 밀어도 이동한다.
    carousel.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    carousel.addEventListener("touchend", (event) => {
        const movedX = event.changedTouches[0].clientX - touchStartX;

        if (movedX > 50 && currentIndex > 0) {
            currentIndex -= 1;
            renderSlide();
        }

        if (movedX < -50 && currentIndex < post.slides.length - 1) {
            currentIndex += 1;
            renderSlide();
        }
    }, { passive: true });

    // 꿀팁 표시는 사진 위에 배치해도 본문의 높이는 모든 카드에서 동일하다.
    badges.append(status, tipBadge);
    imageWrap.append(image, badges);
    body.append(courseTitle, slideTitle, description);
    controls.append(previousButton, dots, nextButton);
    carousel.append(imageWrap, body, controls);
    renderSlide();

    return carousel;
}

function openWalkDetail(post) {
    dialogContent.replaceChildren(createPostCarousel(post));

    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        dialog.setAttribute("open", "");
    }
}

function closeWalkDetail() {
    if (typeof dialog.close === "function") {
        dialog.close();
    } else {
        dialog.removeAttribute("open");
    }
}

function toggleFavorite(postId) {
    if (isFavorite(postId)) {
        favoritePostIds = favoritePostIds.filter((id) => id !== postId);
    } else {
        favoritePostIds.push(postId);
    }

    saveFavoritePostIds();
    renderWalkPosts();
}

postList.addEventListener("click", (event) => {
    const actionButton = event.target.closest("button[data-action]");
    const card = event.target.closest(".walk-card");

    if (!actionButton || !card) {
        return;
    }

    const selectedPost = walkPosts.find((post) => post.id === card.dataset.id);

    if (!selectedPost) {
        return;
    }

    if (actionButton.dataset.action === "favorite") {
        toggleFavorite(selectedPost.id);
    }

    if (actionButton.dataset.action === "detail") {
        openWalkDetail(selectedPost);
    }
});

areaFilter.addEventListener("change", renderWalkPosts);
moodFilter.addEventListener("change", renderWalkPosts);
favoriteOnly.addEventListener("change", renderWalkPosts);

resetButton.addEventListener("click", () => {
    areaFilter.value = "all";
    moodFilter.value = "all";
    favoriteOnly.checked = false;
    renderWalkPosts();
});

dialogCloseButton.addEventListener("click", closeWalkDetail);

// 모달 바깥의 어두운 영역을 클릭해도 상세 글을 닫는다.
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        closeWalkDetail();
    }
});

renderWalkPosts();
