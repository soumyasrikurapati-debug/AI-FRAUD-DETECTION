/**
 * AI Fraud Detection & Financial Transaction Management System
 * Local Interactive Data Store & Explainable Fraud Scoring Engine
 */

const DB_STORE = {
    KEYS: {
        CUSTOMERS: 'apex_customers',
        ACCOUNTS: 'apex_accounts',
        BRANCHES: 'apex_branches',
        TRANSACTIONS: 'apex_transactions',
        FRAUD_RECORDS: 'apex_fraud_records',
        ALERTS: 'apex_alerts',
        AI_MODELS: 'apex_ai_models',
        AUTH_USER: 'apex_auth_user'
    },

    // ------------------------------------------------------------------------
    // Initial Seed Data (Mirrors database/seed_data.sql)
    // ------------------------------------------------------------------------
    init() {
        if (!localStorage.getItem(this.KEYS.CUSTOMERS)) {
            const initialCustomers = [
                { customer_id: 1, name: 'Aarav Sharma', email: 'aarav.sharma@gmail.com', phone: '+91 98201 12345', address: 'Flat 402, Sea Green Apts, Worli, Mumbai', kyc_status: 'VERIFIED', created_at: '2026-10-15' },
                { customer_id: 2, name: 'Priya Patel', email: 'priya.patel@yahoo.com', phone: '+91 98450 67890', address: '74 Brigade Orchards, Devanahalli, Bangalore', kyc_status: 'VERIFIED', created_at: '2026-10-16' },
                { customer_id: 3, name: 'Rohan Verma', email: 'rohan.verma@outlook.com', phone: '+91 98112 34567', address: 'B-12 Hauz Khas Enclave, New Delhi', kyc_status: 'VERIFIED', created_at: '2026-10-18' },
                { customer_id: 4, name: 'Ananya Sen', email: 'ananya.sen@gmail.com', phone: '+91 98300 98765', address: '14 Ballygunge Park Road, Kolkata', kyc_status: 'PENDING', created_at: '2026-10-20' },
                { customer_id: 5, name: 'Vikram Malhotra', email: 'vikram.m@fintech.co', phone: '+91 99887 76655', address: '88 Banjara Hills, Hyderabad', kyc_status: 'VERIFIED', created_at: '2026-10-22' }
            ];
            localStorage.setItem(this.KEYS.CUSTOMERS, JSON.stringify(initialCustomers));
        }

        if (!localStorage.getItem(this.KEYS.BRANCHES)) {
            const initialBranches = [
                { branch_id: 1, branch_name: 'Apex Corporate Metro', address: '100 Financial Blvd', city: 'Mumbai', ifsc_code: 'APEX000101', phone_number: '+91 22 2490 1100' },
                { branch_id: 2, branch_name: 'Tech Hub Silicon Branch', address: '45 Innovation Highway', city: 'Bangalore', ifsc_code: 'APEX000204', phone_number: '+91 80 4123 5500' },
                { branch_id: 3, branch_name: 'Capital City Main Branch', address: '12 Connaught Place', city: 'New Delhi', ifsc_code: 'APEX000309', phone_number: '+91 11 2341 8800' }
            ];
            localStorage.setItem(this.KEYS.BRANCHES, JSON.stringify(initialBranches));
        }

        if (!localStorage.getItem(this.KEYS.ACCOUNTS)) {
            const initialAccounts = [
                { account_id: 1, customer_id: 1, customer_name: 'Aarav Sharma', account_number: 'APEX1002938471', account_type: 'SAVINGS', balance: 145000.00, account_status: 'ACTIVE' },
                { account_id: 2, customer_id: 1, customer_name: 'Aarav Sharma', account_number: 'APEX1002938472', account_type: 'CURRENT', balance: 520000.00, account_status: 'ACTIVE' },
                { account_id: 3, customer_id: 2, customer_name: 'Priya Patel', account_number: 'APEX2003847590', account_type: 'SAVINGS', balance: 89500.50, account_status: 'ACTIVE' },
                { account_id: 4, customer_id: 3, customer_name: 'Rohan Verma', account_number: 'APEX3004958601', account_type: 'SAVINGS', balance: 34000.00, account_status: 'ACTIVE' },
                { account_id: 5, customer_id: 4, customer_name: 'Ananya Sen', account_number: 'APEX4005069712', account_type: 'SAVINGS', balance: 15000.00, account_status: 'ACTIVE' },
                { account_id: 6, customer_id: 5, customer_name: 'Vikram Malhotra', account_number: 'APEX5006170823', account_type: 'CURRENT', balance: 1250000.00, account_status: 'ACTIVE' },
                { account_id: 7, customer_id: 3, customer_name: 'Rohan Verma', account_number: 'APEX3004958602', account_type: 'FIXED_DEPOSIT', balance: 500000.00, account_status: 'ACTIVE' }
            ];
            localStorage.setItem(this.KEYS.ACCOUNTS, JSON.stringify(initialAccounts));
        }

        if (!localStorage.getItem(this.KEYS.AI_MODELS)) {
            const initialAiModels = [
                { model_id: 1, model_name: 'Supervised Decision Tree Classifier', model_type: 'Decision Tree (Anomaly Detection)', model_version: 'v1.4', model_accuracy: 94.80, model_status: 'ACTIVE' },
                { model_id: 2, model_name: 'Heuristic Multi-Rule Sentinel', model_type: 'Multi-Factor Rule Engine', model_version: 'v2.1', model_accuracy: 96.50, model_status: 'ACTIVE' }
            ];
            localStorage.setItem(this.KEYS.AI_MODELS, JSON.stringify(initialAiModels));
        }

        if (!localStorage.getItem(this.KEYS.TRANSACTIONS)) {
            const initialTransactions = [
                { transaction_id: 1, account_id: 1, account_number: 'APEX1002938471', customer_name: 'Aarav Sharma', branch_id: 1, transaction_type: 'DEPOSIT', amount: 25000.00, transaction_date: '2026-10-25', transaction_time: '10:15:00', location: 'Mumbai', transaction_status: 'SUCCESS' },
                { transaction_id: 2, account_id: 1, account_number: 'APEX1002938471', customer_name: 'Aarav Sharma', branch_id: 1, transaction_type: 'WITHDRAWAL', amount: 4500.00, transaction_date: '2026-10-26', transaction_time: '14:22:30', location: 'Mumbai', transaction_status: 'SUCCESS' },
                { transaction_id: 3, account_id: 2, account_number: 'APEX1002938472', customer_name: 'Aarav Sharma', branch_id: 1, transaction_type: 'TRANSFER', amount: 850000.00, transaction_date: '2026-10-27', transaction_time: '02:15:10', location: 'Moscow, Russia', transaction_status: 'FLAGGED' },
                { transaction_id: 4, account_id: 3, account_number: 'APEX2003847590', customer_name: 'Priya Patel', branch_id: 2, transaction_type: 'DEPOSIT', amount: 50000.00, transaction_date: '2026-10-28', transaction_time: '11:00:00', location: 'Bangalore', transaction_status: 'SUCCESS' },
                { transaction_id: 5, account_id: 3, account_number: 'APEX2003847590', customer_name: 'Priya Patel', branch_id: 2, transaction_type: 'TRANSFER', amount: 75000.00, transaction_date: '2026-10-28', transaction_time: '11:02:15', location: 'Bangalore', transaction_status: 'FLAGGED' },
                { transaction_id: 6, account_id: 4, account_number: 'APEX3004958601', customer_name: 'Rohan Verma', branch_id: 3, transaction_type: 'WITHDRAWAL', amount: 2000.00, transaction_date: '2026-10-29', transaction_time: '16:45:00', location: 'New Delhi', transaction_status: 'SUCCESS' },
                { transaction_id: 7, account_id: 6, account_number: 'APEX5006170823', customer_name: 'Vikram Malhotra', branch_id: 2, transaction_type: 'TRANSFER', amount: 350000.00, transaction_date: '2026-10-30', transaction_time: '19:10:00', location: 'Hyderabad', transaction_status: 'FLAGGED' },
                { transaction_id: 8, account_id: 1, account_number: 'APEX1002938471', customer_name: 'Aarav Sharma', branch_id: 1, transaction_type: 'TRANSFER', amount: 12000.00, transaction_date: '2026-10-31', transaction_time: '09:30:00', location: 'Mumbai', transaction_status: 'SUCCESS' },
                { transaction_id: 9, account_id: 2, account_number: 'APEX1002938472', customer_name: 'Aarav Sharma', branch_id: 1, transaction_type: 'WITHDRAWAL', amount: 500000.00, transaction_date: '2026-10-31', transaction_time: '23:55:00', location: 'Lagos, Nigeria', transaction_status: 'FLAGGED' },
                { transaction_id: 10, account_id: 5, account_number: 'APEX4005069712', customer_name: 'Ananya Sen', branch_id: 3, transaction_type: 'TRANSFER', amount: 1500.00, transaction_date: '2026-11-01', transaction_time: '08:45:00', location: 'Kolkata', transaction_status: 'SUCCESS' }
            ];
            localStorage.setItem(this.KEYS.TRANSACTIONS, JSON.stringify(initialTransactions));
        }

        if (!localStorage.getItem(this.KEYS.FRAUD_RECORDS)) {
            const initialFraud = [
                { fraud_id: 1, transaction_id: 1, model_id: 1, fraud_type: 'NORMAL_TRANSACTION', fraud_score: 5.00, risk_level: 'LOW', detection_date: '2026-10-25 10:15:05', detection_method: 'Rule-Based Sentinel', fraud_status: 'RESOLVED', reasons: 'Within standard baseline threshold.' },
                { fraud_id: 2, transaction_id: 2, model_id: 1, fraud_type: 'NORMAL_TRANSACTION', fraud_score: 8.50, risk_level: 'LOW', detection_date: '2026-10-26 14:22:35', detection_method: 'Rule-Based Sentinel', fraud_status: 'RESOLVED', reasons: 'Standard ATM withdrawal in home city.' },
                { fraud_id: 3, transaction_id: 3, model_id: 2, fraud_type: 'ANOMALOUS_LOCATION_AND_AMOUNT', fraud_score: 94.00, risk_level: 'HIGH', detection_date: '2026-10-27 02:15:15', detection_method: 'Geo-Threshold Engine', fraud_status: 'CONFIRMED_FRAUD', reasons: 'Extreme amount (₹8,50,000) at 2 AM from Moscow, Russia outside domestic perimeter.' },
                { fraud_id: 4, transaction_id: 4, model_id: 1, fraud_type: 'NORMAL_TRANSACTION', fraud_score: 12.00, risk_level: 'LOW', detection_date: '2026-10-28 11:00:05', detection_method: 'Rule-Based Sentinel', fraud_status: 'RESOLVED', reasons: 'Regular branch deposit.' },
                { fraud_id: 5, transaction_id: 5, model_id: 2, fraud_type: 'RAPID_FREQUENCY_VELOCITY', fraud_score: 78.50, risk_level: 'HIGH', detection_date: '2026-10-28 11:02:20', detection_method: 'Velocity Burst Rule', fraud_status: 'SUSPECTED', reasons: 'Multiple transfer requests initiated within 2 minutes of prior deposit.' },
                { fraud_id: 6, transaction_id: 6, model_id: 1, fraud_type: 'NORMAL_TRANSACTION', fraud_score: 4.00, risk_level: 'LOW', detection_date: '2026-10-29 16:45:05', detection_method: 'Rule-Based Sentinel', fraud_status: 'RESOLVED', reasons: 'Standard low-value withdrawal.' },
                { fraud_id: 7, transaction_id: 7, model_id: 2, fraud_type: 'HIGH_VALUE_THRESHOLD', fraud_score: 65.00, risk_level: 'MEDIUM', detection_date: '2026-10-30 19:10:05', detection_method: 'Threshold Monitor', fraud_status: 'UNDER_REVIEW', reasons: 'Transfer of ₹3,50,000 exceeds single-day average user profile.' },
                { fraud_id: 8, transaction_id: 8, model_id: 1, fraud_type: 'NORMAL_TRANSACTION', fraud_score: 9.00, risk_level: 'LOW', detection_date: '2026-10-31 09:30:05', detection_method: 'Rule-Based Sentinel', fraud_status: 'RESOLVED', reasons: 'Verified domestic payment.' },
                { fraud_id: 9, transaction_id: 9, model_id: 2, fraud_type: 'LOCATION_MISMATCH_HIGH_VALUE', fraud_score: 96.00, risk_level: 'HIGH', detection_date: '2026-10-31 23:55:05', detection_method: 'Geo-Threshold Engine', fraud_status: 'SUSPECTED', reasons: 'High-value withdrawal (₹5,00,000) from Lagos, Nigeria. Account owner resident of Mumbai.' },
                { fraud_id: 10, transaction_id: 10, model_id: 1, fraud_type: 'NORMAL_TRANSACTION', fraud_score: 6.00, risk_level: 'LOW', detection_date: '2026-11-01 08:45:05', detection_method: 'Rule-Based Sentinel', fraud_status: 'RESOLVED', reasons: 'Low-value peer transfer.' }
            ];
            localStorage.setItem(this.KEYS.FRAUD_RECORDS, JSON.stringify(initialFraud));
        }

        if (!localStorage.getItem(this.KEYS.ALERTS)) {
            const initialAlerts = [
                { alert_id: 1, fraud_id: 3, transaction_id: 3, account_number: 'APEX1002938472', alert_type: 'CRITICAL_LOCATION_AMOUNT', alert_message: 'High-value transfer ₹8,50,000 detected from Moscow, Russia at 02:15 AM outside home country.', alert_time: '2026-10-27 02:15:20', alert_status: 'NEW' },
                { alert_id: 2, fraud_id: 5, transaction_id: 5, account_number: 'APEX2003847590', alert_type: 'VELOCITY_BREACH', alert_message: 'Velocity rule breached: Multiple rapid transfers within 2 minutes.', alert_time: '2026-10-28 11:02:25', alert_status: 'UNDER_REVIEW' },
                { alert_id: 3, fraud_id: 7, transaction_id: 7, account_number: 'APEX5006170823', alert_type: 'HIGH_VALUE_SPIKE', alert_message: 'Transfer amount ₹3,50,000 exceeds baseline threshold for account APEX5006170823.', alert_time: '2026-10-30 19:10:10', alert_status: 'UNDER_REVIEW' },
                { alert_id: 4, fraud_id: 9, transaction_id: 9, account_number: 'APEX1002938472', alert_type: 'LOCATION_ANOMALY', alert_message: 'High-value liquidation ₹5,00,000 initiated from Lagos, Nigeria.', alert_time: '2026-10-31 23:55:10', alert_status: 'NEW' }
            ];
            localStorage.setItem(this.KEYS.ALERTS, JSON.stringify(initialAlerts));
        }

        // Set default logged in user if not set
        if (!localStorage.getItem(this.KEYS.AUTH_USER)) {
            localStorage.setItem(this.KEYS.AUTH_USER, JSON.stringify({
                user_id: 1,
                user_name: 'admin',
                email: 'admin@apexbank.com',
                role: 'SUPER_ADMIN'
            }));
        }
    },

    // ------------------------------------------------------------------------
    // Customer CRUD
    // ------------------------------------------------------------------------
    getCustomers() {
        return JSON.parse(localStorage.getItem(this.KEYS.CUSTOMERS) || '[]');
    },
    getCustomerById(id) {
        return this.getCustomers().find(c => c.customer_id === Number(id));
    },
    addCustomer(data) {
        const customers = this.getCustomers();
        const newId = customers.length ? Math.max(...customers.map(c => c.customer_id)) + 1 : 1;
        const newCustomer = {
            customer_id: newId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            kyc_status: data.kyc_status || 'PENDING',
            created_at: new Date().toISOString().split('T')[0]
        };
        customers.unshift(newCustomer);
        localStorage.setItem(this.KEYS.CUSTOMERS, JSON.stringify(customers));
        return newCustomer;
    },
    updateCustomer(id, data) {
        const customers = this.getCustomers();
        const index = customers.findIndex(c => c.customer_id === Number(id));
        if (index !== -1) {
            customers[index] = { ...customers[index], ...data };
            localStorage.setItem(this.KEYS.CUSTOMERS, JSON.stringify(customers));
            return customers[index];
        }
        return null;
    },
    deleteCustomer(id) {
        const customers = this.getCustomers().filter(c => c.customer_id !== Number(id));
        localStorage.setItem(this.KEYS.CUSTOMERS, JSON.stringify(customers));
        return true;
    },

    // ------------------------------------------------------------------------
    // Account CRUD
    // ------------------------------------------------------------------------
    getAccounts() {
        return JSON.parse(localStorage.getItem(this.KEYS.ACCOUNTS) || '[]');
    },
    getAccountById(id) {
        return this.getAccounts().find(a => a.account_id === Number(id));
    },
    addAccount(data) {
        const accounts = this.getAccounts();
        const customer = this.getCustomerById(data.customer_id);
        const newId = accounts.length ? Math.max(...accounts.map(a => a.account_id)) + 1 : 1;
        const randomNum = Math.floor(1000000000 + Math.random() * 9000000000);
        const newAccount = {
            account_id: newId,
            customer_id: Number(data.customer_id),
            customer_name: customer ? customer.name : 'Unknown Customer',
            account_number: data.account_number || `APEX${randomNum}`,
            account_type: data.account_type || 'SAVINGS',
            balance: parseFloat(data.balance || 0),
            account_status: data.account_status || 'ACTIVE'
        };
        accounts.unshift(newAccount);
        localStorage.setItem(this.KEYS.ACCOUNTS, JSON.stringify(accounts));
        return newAccount;
    },
    updateAccount(id, data) {
        const accounts = this.getAccounts();
        const index = accounts.findIndex(a => a.account_id === Number(id));
        if (index !== -1) {
            accounts[index] = { ...accounts[index], ...data };
            localStorage.setItem(this.KEYS.ACCOUNTS, JSON.stringify(accounts));
            return accounts[index];
        }
        return null;
    },
    deleteAccount(id) {
        const accounts = this.getAccounts().filter(a => a.account_id !== Number(id));
        localStorage.setItem(this.KEYS.ACCOUNTS, JSON.stringify(accounts));
        return true;
    },

    // ------------------------------------------------------------------------
    // Branch CRUD
    // ------------------------------------------------------------------------
    getBranches() {
        return JSON.parse(localStorage.getItem(this.KEYS.BRANCHES) || '[]');
    },
    addBranch(data) {
        const branches = this.getBranches();
        const newId = branches.length ? Math.max(...branches.map(b => b.branch_id)) + 1 : 1;
        const newBranch = {
            branch_id: newId,
            branch_name: data.branch_name,
            address: data.address,
            city: data.city,
            ifsc_code: data.ifsc_code,
            phone_number: data.phone_number
        };
        branches.push(newBranch);
        localStorage.setItem(this.KEYS.BRANCHES, JSON.stringify(branches));
        return newBranch;
    },
    updateBranch(id, data) {
        const branches = this.getBranches();
        const idx = branches.findIndex(b => b.branch_id === Number(id));
        if (idx !== -1) {
            branches[idx] = { ...branches[idx], ...data };
            localStorage.setItem(this.KEYS.BRANCHES, JSON.stringify(branches));
            return branches[idx];
        }
        return null;
    },
    deleteBranch(id) {
        const branches = this.getBranches().filter(b => b.branch_id !== Number(id));
        localStorage.setItem(this.KEYS.BRANCHES, JSON.stringify(branches));
        return true;
    },

    // ------------------------------------------------------------------------
    // Transaction & AI Fraud Scoring Engine
    // ------------------------------------------------------------------------
    getTransactions() {
        return JSON.parse(localStorage.getItem(this.KEYS.TRANSACTIONS) || '[]');
    },
    getFraudRecords() {
        return JSON.parse(localStorage.getItem(this.KEYS.FRAUD_RECORDS) || '[]');
    },
    getAlerts() {
        return JSON.parse(localStorage.getItem(this.KEYS.ALERTS) || '[]');
    },
    getAiModels() {
        return JSON.parse(localStorage.getItem(this.KEYS.AI_MODELS) || '[]');
    },

    /**
     * Explainable Fraud Rule Evaluation Engine
     */
    evaluateTransaction(txData, account, recentTxs) {
        let score = 5.0; // Base score
        let reasons = [];
        let fraudType = 'NORMAL_TRANSACTION';
        const amount = parseFloat(txData.amount);

        // Rule 1: High Transaction Amount Threshold
        if (amount >= 500000) {
            score += 55;
            reasons.push(`Extreme amount anomaly: Transaction amount ₹${amount.toLocaleString()} exceeds critical ₹5,00,000 threshold.`);
            fraudType = 'EXTREME_AMOUNT_THRESHOLD';
        } else if (amount >= 100000) {
            score += 35;
            reasons.push(`High value transaction: ₹${amount.toLocaleString()} exceeds standard ₹1,00,000 limit.`);
            fraudType = 'HIGH_AMOUNT_FLAG';
        } else if (amount >= 50000) {
            score += 15;
            reasons.push(`Moderate volume transaction.`);
        }

        // Rule 2: Geographic Anomaly / Foreign High-Risk Location
        const foreignRiskyLocations = ['moscow', 'russia', 'lagos', 'nigeria', 'kyiv', 'unknown', 'dubai', 'london'];
        const locLower = (txData.location || '').toLowerCase();
        const hasForeignLocation = foreignRiskyLocations.some(l => locLower.includes(l));

        if (hasForeignLocation) {
            score += 40;
            reasons.push(`Geographical anomaly: Location "${txData.location}" deviates from domestic base customer profile.`);
            fraudType = fraudType === 'NORMAL_TRANSACTION' ? 'LOCATION_MISMATCH' : `${fraudType}_AND_LOCATION`;
        }

        // Rule 3: Velocity / Burst Frequency (Multiple transactions on same account today)
        const todayTxs = recentTxs.filter(t => t.account_id === account.account_id && t.transaction_date === txData.transaction_date);
        if (todayTxs.length >= 2) {
            score += 30;
            reasons.push(`Velocity breach: Account initiated ${todayTxs.length + 1} transactions in close succession.`);
            fraudType = fraudType === 'NORMAL_TRANSACTION' ? 'VELOCITY_BURST' : `${fraudType}_VELOCITY`;
        }

        // Rule 4: High liquidation pattern (Withdrawal exceeding 80% of balance)
        if (txData.transaction_type === 'WITHDRAWAL' && amount > (account.balance * 0.8)) {
            score += 20;
            reasons.push(`Liquidation warning: Withdrawal of ₹${amount.toLocaleString()} drains over 80% of account balance.`);
        }

        // Clamp score to 100
        score = Math.min(100, Math.max(0, score));

        let riskLevel = 'LOW';
        let txStatus = 'SUCCESS';

        if (score >= 70) {
            riskLevel = 'HIGH';
            txStatus = 'FLAGGED';
        } else if (score >= 40) {
            riskLevel = 'MEDIUM';
            txStatus = 'PENDING';
        }

        if (reasons.length === 0) {
            reasons.push('Standard legitimate transaction within normal customer profile.');
        }

        return {
            fraud_score: parseFloat(score.toFixed(2)),
            risk_level: riskLevel,
            fraud_type: fraudType,
            transaction_status: txStatus,
            reasons: reasons.join(' ')
        };
    },

    addTransaction(data) {
        const transactions = this.getTransactions();
        const accounts = this.getAccounts();
        const account = accounts.find(a => a.account_id === Number(data.account_id));
        if (!account) throw new Error('Selected bank account was not found.');

        const amount = parseFloat(data.amount);
        if (isNaN(amount) || amount <= 0) throw new Error('Please enter a valid positive transaction amount.');

        // Verify balance for debit
        if ((data.transaction_type === 'WITHDRAWAL' || data.transaction_type === 'TRANSFER') && account.balance < amount) {
            throw new Error(`Insufficient account balance. Available: ₹${account.balance.toLocaleString()}`);
        }

        const now = new Date();
        const txDate = data.transaction_date || now.toISOString().split('T')[0];
        const txTime = data.transaction_time || now.toTimeString().split(' ')[0];
        const newTxId = transactions.length ? Math.max(...transactions.map(t => t.transaction_id)) + 1 : 1;

        // Run the Explainable AI Fraud Scoring
        const evalResult = this.evaluateTransaction({
            account_id: account.account_id,
            amount: amount,
            transaction_type: data.transaction_type,
            location: data.location || 'Local Terminal',
            transaction_date: txDate
        }, account, transactions);

        // Update Account Balance
        if (evalResult.transaction_status !== 'FLAGGED') {
            if (data.transaction_type === 'DEPOSIT') {
                account.balance += amount;
            } else {
                account.balance -= amount;
            }
            this.updateAccount(account.account_id, { balance: account.balance });
        }

        // Record Transaction
        const newTx = {
            transaction_id: newTxId,
            account_id: account.account_id,
            account_number: account.account_number,
            customer_name: account.customer_name,
            branch_id: Number(data.branch_id || 1),
            transaction_type: data.transaction_type,
            amount: amount,
            transaction_date: txDate,
            transaction_time: txTime,
            location: data.location || 'Branch Terminal',
            transaction_status: evalResult.transaction_status
        };
        transactions.unshift(newTx);
        localStorage.setItem(this.KEYS.TRANSACTIONS, JSON.stringify(transactions));

        // Record Fraud Assessment
        const fraudRecords = this.getFraudRecords();
        const newFraudId = fraudRecords.length ? Math.max(...fraudRecords.map(f => f.fraud_id)) + 1 : 1;
        const newFraud = {
            fraud_id: newFraudId,
            transaction_id: newTxId,
            model_id: 2, // Heuristic Multi-Rule Sentinel
            fraud_type: evalResult.fraud_type,
            fraud_score: evalResult.fraud_score,
            risk_level: evalResult.risk_level,
            detection_date: `${txDate} ${txTime}`,
            detection_method: 'Rule-Based Heuristic Classifier',
            fraud_status: evalResult.risk_level === 'HIGH' ? 'SUSPECTED' : (evalResult.risk_level === 'MEDIUM' ? 'UNDER_REVIEW' : 'RESOLVED'),
            reasons: evalResult.reasons
        };
        fraudRecords.unshift(newFraud);
        localStorage.setItem(this.KEYS.FRAUD_RECORDS, JSON.stringify(fraudRecords));

        // Generate Alert if HIGH or MEDIUM risk
        if (evalResult.risk_level === 'HIGH' || evalResult.risk_level === 'MEDIUM') {
            const alerts = this.getAlerts();
            const newAlertId = alerts.length ? Math.max(...alerts.map(a => a.alert_id)) + 1 : 1;
            const newAlert = {
                alert_id: newAlertId,
                fraud_id: newFraudId,
                transaction_id: newTxId,
                account_number: account.account_number,
                alert_type: evalResult.fraud_type,
                alert_message: `Alert triggered on Account ${account.account_number}: ₹${amount.toLocaleString()} in ${newTx.location}. Reason: ${evalResult.reasons}`,
                alert_time: `${txDate} ${txTime}`,
                alert_status: 'NEW'
            };
            alerts.unshift(newAlert);
            localStorage.setItem(this.KEYS.ALERTS, JSON.stringify(alerts));
        }

        return {
            transaction: newTx,
            fraud: newFraud,
            evaluation: evalResult
        };
    },

    updateTransaction(id, data) {
        const transactions = this.getTransactions();
        const index = transactions.findIndex(t => t.transaction_id === Number(id));
        if (index !== -1) {
            transactions[index] = { ...transactions[index], ...data };
            localStorage.setItem(this.KEYS.TRANSACTIONS, JSON.stringify(transactions));
            return transactions[index];
        }
        return null;
    },

    deleteTransaction(id) {
        const transactions = this.getTransactions().filter(t => t.transaction_id !== Number(id));
        localStorage.setItem(this.KEYS.TRANSACTIONS, JSON.stringify(transactions));
        return true;
    },

    // ------------------------------------------------------------------------
    // Alert Management
    // ------------------------------------------------------------------------
    updateAlertStatus(alertId, newStatus) {
        const alerts = this.getAlerts();
        const alert = alerts.find(a => a.alert_id === Number(alertId));
        if (alert) {
            alert.alert_status = newStatus;
            localStorage.setItem(this.KEYS.ALERTS, JSON.stringify(alerts));
            return alert;
        }
        return null;
    },

    deleteAlert(alertId) {
        const alerts = this.getAlerts().filter(a => a.alert_id !== Number(alertId));
        localStorage.setItem(this.KEYS.ALERTS, JSON.stringify(alerts));
        return true;
    },

    updateFraudStatus(fraudId, newStatus) {
        const fraudRecords = this.getFraudRecords();
        const fraud = fraudRecords.find(f => f.fraud_id === Number(fraudId));
        if (fraud) {
            fraud.fraud_status = newStatus;
            localStorage.setItem(this.KEYS.FRAUD_RECORDS, JSON.stringify(fraudRecords));
            return fraud;
        }
        return null;
    },

    // ------------------------------------------------------------------------
    // Dashboard Aggregation
    // ------------------------------------------------------------------------
    getDashboardStats() {
        const transactions = this.getTransactions();
        const fraudRecords = this.getFraudRecords();
        const alerts = this.getAlerts();
        const customers = this.getCustomers();

        const totalTransactions = transactions.length;
        const totalVolume = transactions.reduce((acc, t) => acc + (parseFloat(t.amount) || 0), 0);
        
        const highRisk = fraudRecords.filter(f => f.risk_level === 'HIGH').length;
        const mediumRisk = fraudRecords.filter(f => f.risk_level === 'MEDIUM').length;
        const lowRisk = fraudRecords.filter(f => f.risk_level === 'LOW').length;
        const suspiciousCount = highRisk + mediumRisk;

        const activeAlerts = alerts.filter(a => a.alert_status === 'NEW' || a.alert_status === 'UNDER_REVIEW').length;

        return {
            totalTransactions,
            totalVolume,
            suspiciousCount,
            activeAlerts,
            totalCustomers: customers.length,
            riskBreakdown: { high: highRisk, medium: mediumRisk, low: lowRisk },
            recentTransactions: transactions.slice(0, 6),
            recentAlerts: alerts.slice(0, 5)
        };
    },

    // ------------------------------------------------------------------------
    // Authentication
    // ------------------------------------------------------------------------
    login(username, password) {
        if ((username === 'admin' && password === 'admin123') || (username === 'analyst1' && password === 'analyst123')) {
            const user = {
                user_id: username === 'admin' ? 1 : 2,
                user_name: username,
                email: username === 'admin' ? 'admin@apexbank.com' : 'sarah.analyst@apexbank.com',
                role: username === 'admin' ? 'SUPER_ADMIN' : 'FRAUD_ANALYST'
            };
            localStorage.setItem(this.KEYS.AUTH_USER, JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: 'Invalid credentials. Use admin / admin123' };
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.KEYS.AUTH_USER) || 'null');
    },

    logout() {
        localStorage.removeItem(this.KEYS.AUTH_USER);
        window.location.href = 'login.html';
    }
};

// Initialize the data store upon script execution
DB_STORE.init();
