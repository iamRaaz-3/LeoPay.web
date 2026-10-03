const OPERATIONS_ASSOCIATE = {
  title: 'Operations Associate',
  desc: 'Monitor transactions, reconcile settlements, and investigate failed payments.',
  location: 'Hybrid',
  type: 'Full time',
  tag: 'Operations',
  about:
    'As an Operations Associate at Leopay, you will keep our cross-border payment flows running smoothly every day. You will work closely with our compliance, product, and customer teams to make sure every transaction reaches its destination quickly and accurately.',
  responsibilities: [
    'Monitor daily transactions and flag anything unusual.',
    'Reconcile settlements across banking and stablecoin partners.',
    'Investigate failed or delayed payments and see them through to resolution.',
    'Document processes and help improve operational workflows.',
  ],
  requirements: [
    '1+ years of experience in operations, payments, or fintech.',
    'Strong attention to detail and comfort working with numbers.',
    'Clear written and verbal communication skills.',
    'Organised, proactive, and calm under pressure.',
  ],
};

const SDR = {
  title: 'Sales Development Representative (SDR)',
  desc: 'Engage potential customers, qualify leads, and support the sales pipeline.',
  location: 'USA',
  type: 'Full time',
  tag: 'Product Design',
  about:
    'As an SDR at Leopay, you will be the first point of contact for businesses looking to move money across borders faster. You will work closely with our sales and partnerships teams to build a healthy pipeline and help customers discover the right products for their needs.',
  responsibilities: [
    'Research and identify potential customers across target markets.',
    'Run outbound outreach through email, phone, and LinkedIn.',
    'Qualify inbound leads and book discovery calls for account executives.',
    'Keep the CRM accurate and up to date with every interaction.',
  ],
  requirements: [
    '1+ years of experience in sales, business development, or customer-facing roles.',
    'Excellent written and verbal communication skills.',
    'Curiosity about payments, fintech, or stablecoins.',
    'Self-motivated, organised, and comfortable with targets.',
  ],
};

export const JOBS = [OPERATIONS_ASSOCIATE, SDR, SDR, SDR, SDR].map((job, i) => ({
  ...job,
  id: String(i + 1),
}));

export const getJob = id => JOBS.find(job => job.id === id);
