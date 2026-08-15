document.addEventListener('DOMContentLoaded', function() {
    loadProfile();
    scatterShoes();
});

const SHOE_SVG = `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><!-- sola --><path d="M10 60 Q10 72 22 72 L100 72 Q112 72 112 60 L112 56 L10 56 Z" fill="currentColor"/><!-- corpo do tênis --><path d="M10 56 L10 44 Q10 32 22 32 L34 32 Q40 18 52 18 L60 18 Q66 22 68 30 L72 36 Q82 34 90 38 Q102 42 110 48 Q114 52 112 56 Z" fill="currentColor"/><!-- língua/canelito --><path d="M34 32 L34 22 Q34 16 40 16 L52 16 Q58 16 58 22 L58 30 Z" fill="currentColor" opacity="0.85"/><!-- cadarços --><g stroke="rgba(0,0,0,0.5)" stroke-width="2" fill="none"><line x1="40" y1="22" x2="54" y2="22"/><line x1="40" y1="28" x2="54" y2="28"/></g><g fill="rgba(0,0,0,0.5)"><circle cx="42" cy="22" r="1.2"/><circle cx="52" cy="22" r="1.2"/><circle cx="42" cy="28" r="1.2"/><circle cx="52" cy="28" r="1.2"/></g><!-- detalhe lateral (logo) --><path d="M72 44 Q82 40 92 46" stroke="rgba(0,0,0,0.4)" stroke-width="2" fill="none"/><!-- ilhós --><g fill="rgba(0,0,0,0.4)"><circle cx="36" cy="24" r="1"/><circle cx="36" cy="30" r="1"/></g></svg>`;

function scatterShoes() {
    const container = document.getElementById('shoes-bg');
    if (!container) return;

    const positions = [
        { top: '8%',  left: '6%',  size: 56, rot: -15, delay: 0 },
        { top: '15%', right: '8%', size: 72, rot: 12,  delay: 1.2 },
        { top: '32%', left: '4%',  size: 48, rot: -8,  delay: 2.4 },
        { top: '45%', right: '5%', size: 64, rot: 20,  delay: 0.6 },
        { top: '58%', left: '8%',  size: 60, rot: -22, delay: 1.8 },
        { top: '70%', right: '10%',size: 52, rot: 10,  delay: 3.0 },
        { top: '82%', left: '12%', size: 68, rot: -12, delay: 0.9 },
        { top: '88%', right: '6%', size: 50, rot: 18,  delay: 2.1 },
        { top: '5%',  left: '45%', size: 40, rot: 0,   delay: 1.5 },
        { top: '92%', left: '42%', size: 44, rot: 5,   delay: 0.3 }
    ];

    positions.forEach((pos, i) => {
        const shoe = document.createElement('div');
        shoe.className = 'shoe';
        shoe.innerHTML = SHOE_SVG;
        Object.assign(shoe.style, {
            top: pos.top,
            left: pos.left || 'auto',
            right: pos.right || 'auto',
            width: pos.size + 'px',
            height: pos.size + 'px',
            '--rot': pos.rot + 'deg',
            animationDelay: pos.delay + 's'
        });
        container.appendChild(shoe);
    });
}

// Fonte única de verdade para todos os ícones (usada por links e redes sociais).
const ICONS = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    'file-text': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>`,
    default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

function loadProfile() {
    if (!profile) {
        console.error('Profile data not found');
        return;
    }

    loadProfileInfo();
    loadLinks();
    loadSocialNetworks();
    applyTheme();
}

function loadProfileInfo() {
    const profileImage = document.getElementById('profile-image');
    const profileImageContainer = document.querySelector('.profile-image-container');
    const profileName = document.getElementById('profile-name');
    const profileUsername = document.getElementById('profile-username');
    const profileBio = document.getElementById('profile-bio');

    if (profile.profileImage) {
        profileImage.src = profile.profileImage;
        profileImage.style.display = 'block';
        profileImageContainer.classList.remove('no-image');
    } else {
        profileImage.style.display = 'none';
        profileImageContainer.classList.add('no-image');
    }

    if (profile.name) {
        profileName.textContent = profile.name;
    }

    if (profile.username) {
        profileUsername.textContent = profile.username;
    }

    if (profile.bio) {
        profileBio.textContent = profile.bio;
    }
}

function loadLinks() {
    const linksList = document.getElementById('links-list');
    
    if (!profile.links || profile.links.length === 0) {
        linksList.innerHTML = '<p class="no-links">Nenhum link disponível</p>';
        return;
    }

    profile.links.forEach((link, index) => {
        if (!link.active) return;

        const linkCard = createLinkCard(link, index);
        linksList.appendChild(linkCard);
    });
}

function createLinkCard(link, index) {
    const card = document.createElement('a');
    card.href = link.url;
    card.className = 'link-card';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.animationDelay = `${index * 0.1}s`;

    const icon = getLinkIcon(link.icon);
    const iconElement = document.createElement('div');
    iconElement.className = 'link-icon';
    iconElement.innerHTML = icon;

    const title = document.createElement('span');
    title.textContent = link.title;

    card.appendChild(iconElement);
    card.appendChild(title);

    return card;
}

function getLinkIcon(iconName) {
    return ICONS[iconName] || ICONS.default;
}

function loadSocialNetworks() {
    const socialIconsContainer = document.getElementById('social-icons');
    
    if (!profile.socialNetworks || profile.socialNetworks.length === 0) {
        socialIconsContainer.style.display = 'none';
        return;
    }

    profile.socialNetworks.forEach((social, index) => {
        if (!social.active) return;

        const socialIcon = createSocialIcon(social, index);
        socialIconsContainer.appendChild(socialIcon);
    });
}

function createSocialIcon(social, index) {
    const icon = document.createElement('a');
    icon.href = social.url;
    icon.className = 'social-icon';
    icon.target = '_blank';
    icon.rel = 'noopener noreferrer';
    icon.style.animationDelay = `${index * 0.1}s`;
    icon.setAttribute('aria-label', social.platform);

    const svgIcon = getSocialIcon(social.platform);
    icon.innerHTML = svgIcon;

    return icon;
}

function getSocialIcon(platform) {
    return ICONS[platform] || ICONS.default;
}

function applyTheme() {
    if (!profile.theme) return;

    const root = document.documentElement;
    
    if (profile.theme.primaryColor) {
        root.style.setProperty('--primary-color', profile.theme.primaryColor);
    }
    
    if (profile.theme.secondaryColor) {
        root.style.setProperty('--secondary-color', profile.theme.secondaryColor);
    }
    
    if (profile.theme.backgroundColor) {
        root.style.setProperty('--background-color', profile.theme.backgroundColor);
    }
    
    if (profile.theme.gradientMid) {
        root.style.setProperty('--gradient-mid', profile.theme.gradientMid);
    }
    
    if (profile.theme.gradientEnd) {
        root.style.setProperty('--gradient-end', profile.theme.gradientEnd);
    }
    
    if (profile.theme.cardBackground) {
        root.style.setProperty('--card-background', profile.theme.cardBackground);
    }
    
    if (profile.theme.cardHover) {
        root.style.setProperty('--card-hover', profile.theme.cardHover);
    }
    
    if (profile.theme.textColor) {
        root.style.setProperty('--text-color', profile.theme.textColor);
    }
    
    if (profile.theme.textSecondary) {
        root.style.setProperty('--text-secondary', profile.theme.textSecondary);
    }
}