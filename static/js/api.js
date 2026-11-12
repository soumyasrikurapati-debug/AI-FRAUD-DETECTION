/**
 * AI Fraud Detection & Transaction System - Central API Client & UI Utilities
 */

const API = {
    async request(endpoint, options = {}) {
        const defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const config = {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers
            }
        };

        try {
            const response = await fetch(endpoint, config);
            const data = await response.json();

            if (response.status === 401) {
                // Unauthorized / session expired
                window.location.href = '/login';
                return null;
            }

            if (!response.ok) {
                throw new Error(data.message || `Request failed with status ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            UI.showToast(error.message, 'error');
            throw error;
        }
    },

    get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },

    post(endpoint, body) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    },

    put(endpoint, body) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body)
        });
    },

    delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
};

const UI = {
    showToast(message, type = 'info') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        const bgColors = {
            success: '#16a34a',
            error: '#dc2626',
            warning: '#d97706',
            info: '#2563eb'
        };

        toast.style.cssText = `
            background: ${bgColors[type] || bgColors.info};
            color: #ffffff;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: fadeIn 0.3s ease;
        `;
        toast.textContent = message;

        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    },

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2
        }).format(amount);
    },

    formatRiskBadge(riskLevel) {
        const level = (riskLevel || '').toUpperCase();
        if (level === 'HIGH') return `<span class="badge badge-high">High Risk</span>`;
        if (level === 'MEDIUM') return `<span class="badge badge-medium">Medium Risk</span>`;
        return `<span class="badge badge-low">Low Risk</span>`;
    }
};
