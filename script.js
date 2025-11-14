const reportData = [
  {
    financialYear: '2022-23',
    gstin: '29ABCDE1234F1Z5',
    entityName: 'Codex Manufacturing Pvt. Ltd.',
    filingStatus: 'ready_to_file',
    lastUpdated: '2024-04-03T13:15:00+05:30',
    grossTurnover: 182_450_000,
    taxableValue: 164_950_000,
    taxPaid: 29_740_000,
    taxPayable: 30_110_000,
    outstandingLiability: 370_000,
    sections: [
      {
        code: '4A',
        description: 'Outward taxable supplies (other than zero rated, nil rated and exempted)',
        taxableValue: 78_450_000,
        taxPaid: 14_121_000,
        taxPayable: 14_310_000,
      },
      {
        code: '4B',
        description: 'Outward taxable supplies (zero rated)',
        taxableValue: 24_300_000,
        taxPaid: 4_374_000,
        taxPayable: 4_360_000,
      },
      {
        code: '4C',
        description: 'Other outward supplies (nil rated, exempted)',
        taxableValue: 5_640_000,
        taxPaid: 0,
        taxPayable: 0,
      },
      {
        code: '5',
        description: 'Advances on which tax has been paid but supply not made',
        taxableValue: 2_160_000,
        taxPaid: 388_800,
        taxPayable: 415_000,
      },
      {
        code: '6',
        description: 'Input tax credit (ITC) availed',
        taxableValue: 48_400_000,
        taxPaid: 11_028_000,
        taxPayable: 11_210_000,
      },
      {
        code: '7',
        description: 'Reversal of ITC',
        taxableValue: 6_000_000,
        taxPaid: 1_122_000,
        taxPayable: 1_240_000,
      },
      {
        code: '8',
        description: 'Other ITC related adjustments',
        taxableValue: 0,
        taxPaid: 1_010_200,
        taxPayable: 990_000,
      },
    ],
    notes: [
      {
        text: 'Reconcile ITC reversal supporting documents before 10 April.',
        assignee: 'Priya Narang',
      },
      {
        text: 'Confirm export invoices for zero-rated supplies for Q4.',
        assignee: 'Finance Ops Team',
      },
    ],
  },
  {
    financialYear: '2021-22',
    gstin: '29ABCDE1234F1Z5',
    entityName: 'Codex Manufacturing Pvt. Ltd.',
    filingStatus: 'filed',
    lastUpdated: '2023-01-22T09:40:00+05:30',
    grossTurnover: 161_900_000,
    taxableValue: 148_700_000,
    taxPaid: 26_240_000,
    taxPayable: 26_240_000,
    outstandingLiability: 0,
    sections: [
      {
        code: '4A',
        description: 'Outward taxable supplies (other than zero rated, nil rated and exempted)',
        taxableValue: 68_190_000,
        taxPaid: 12_274_200,
        taxPayable: 12_274_200,
      },
      {
        code: '4B',
        description: 'Outward taxable supplies (zero rated)',
        taxableValue: 20_110_000,
        taxPaid: 3_619_800,
        taxPayable: 3_619_800,
      },
      {
        code: '4C',
        description: 'Other outward supplies (nil rated, exempted)',
        taxableValue: 4_830_000,
        taxPaid: 0,
        taxPayable: 0,
      },
      {
        code: '5',
        description: 'Advances on which tax has been paid but supply not made',
        taxableValue: 1_780_000,
        taxPaid: 320_400,
        taxPayable: 320_400,
      },
      {
        code: '6',
        description: 'Input tax credit (ITC) availed',
        taxableValue: 42_200_000,
        taxPaid: 9_284_000,
        taxPayable: 9_284_000,
      },
      {
        code: '7',
        description: 'Reversal of ITC',
        taxableValue: 4_590_000,
        taxPaid: 858_300,
        taxPayable: 858_300,
      },
      {
        code: '8',
        description: 'Other ITC related adjustments',
        taxableValue: 0,
        taxPaid: 883_300,
        taxPayable: 883_300,
      },
    ],
    notes: [
      {
        text: 'Archive signed GSTR-9 PDF in compliance folder.',
        assignee: 'Compliance Desk',
      },
    ],
  },
  {
    financialYear: '2022-23',
    gstin: '29XYZDE7890K1Z2',
    entityName: 'Codex Retail Outlets',
    filingStatus: 'draft',
    lastUpdated: '2024-04-01T19:55:00+05:30',
    grossTurnover: 88_400_000,
    taxableValue: 73_200_000,
    taxPaid: 11_760_000,
    taxPayable: 12_040_000,
    outstandingLiability: 280_000,
    sections: [
      {
        code: '4A',
        description: 'Outward taxable supplies (other than zero rated, nil rated and exempted)',
        taxableValue: 39_720_000,
        taxPaid: 7_149_600,
        taxPayable: 7_344_000,
      },
      {
        code: '4B',
        description: 'Outward taxable supplies (zero rated)',
        taxableValue: 8_420_000,
        taxPaid: 1_515_600,
        taxPayable: 1_516_000,
      },
      {
        code: '4C',
        description: 'Other outward supplies (nil rated, exempted)',
        taxableValue: 2_190_000,
        taxPaid: 0,
        taxPayable: 0,
      },
      {
        code: '5',
        description: 'Advances on which tax has been paid but supply not made',
        taxableValue: 1_320_000,
        taxPaid: 237_600,
        taxPayable: 248_000,
      },
      {
        code: '6',
        description: 'Input tax credit (ITC) availed',
        taxableValue: 19_300_000,
        taxPaid: 4_246_000,
        taxPayable: 4_320_000,
      },
      {
        code: '7',
        description: 'Reversal of ITC',
        taxableValue: 2_250_000,
        taxPaid: 421_500,
        taxPayable: 486_000,
      },
      {
        code: '8',
        description: 'Other ITC related adjustments',
        taxableValue: 0,
        taxPaid: 190_300,
        taxPayable: 126_000,
      },
    ],
    notes: [
      {
        text: 'Upload retail outlet stock reconciliation for December quarter.',
        assignee: 'Store Ops Lead',
      },
      {
        text: 'Align turnover numbers with GSTR-1 summary before filing.',
        assignee: 'Retail Finance',
      },
    ],
  },
];

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const statusMap = {
  draft: { label: 'Draft in progress', tone: 'warning' },
  ready_to_file: { label: 'Ready to file', tone: 'success' },
  filed: { label: 'Filed', tone: 'success' },
};

const financialYearSelect = document.querySelector('#financialYear');
const gstinSelect = document.querySelector('#gstin');
const statusSelect = document.querySelector('#status');
const summaryGrid = document.querySelector('#summaryGrid');
const sectionsTable = document.querySelector('#sectionsTable tbody');
const sectionSearch = document.querySelector('#sectionSearch');
const varianceToggle = document.querySelector('#showVariance');
const resetButton = document.querySelector('#resetFilters');
const exportButton = document.querySelector('#exportReport');
const notesList = document.querySelector('#notesList');
const addNoteButton = document.querySelector('#addNote');

const noteTemplate = document.querySelector('#noteTemplate');

function populateFinancialYears() {
  const years = [...new Set(reportData.map((item) => item.financialYear))];
  years.sort((a, b) => (a > b ? -1 : 1));
  years.forEach((year) => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    financialYearSelect.append(option);
  });
}

function populateGstinOptions(selectedYear) {
  gstinSelect.innerHTML = '';
  const gstins = [
    ...new Set(
      reportData
        .filter((item) => !selectedYear || item.financialYear === selectedYear)
        .map((item) => item.gstin)
    ),
  ];
  gstins.forEach((gstin) => {
    const option = document.createElement('option');
    option.value = gstin;
    option.textContent = gstin;
    gstinSelect.append(option);
  });
}

function getFilteredReport() {
  const year = financialYearSelect.value;
  const gstin = gstinSelect.value;
  const status = statusSelect.value;
  const text = sectionSearch.value.trim().toLowerCase();

  const entry = reportData.find(
    (item) => item.financialYear === year && item.gstin === gstin
  );

  if (!entry) return null;

  const matchesStatus =
    status === 'all' || entry.filingStatus === status;

  if (!matchesStatus) {
    return null;
  }

  const filteredSections = entry.sections.filter((section) => {
    if (!text) return true;
    return (
      section.code.toLowerCase().includes(text) ||
      section.description.toLowerCase().includes(text)
    );
  });

  return { ...entry, sections: filteredSections };
}

function renderSummary(report) {
  summaryGrid.innerHTML = '';
  if (!report) {
    summaryGrid.innerHTML =
      '<p class="empty-state">No filing data matches the selected filters.</p>';
    return;
  }

  const summaryItems = [
    {
      label: 'Entity name',
      value: report.entityName,
    },
    {
      label: 'Gross turnover',
      value: currencyFormatter.format(report.grossTurnover),
    },
    {
      label: 'Taxable value',
      value: currencyFormatter.format(report.taxableValue),
    },
    {
      label: 'Tax paid',
      value: currencyFormatter.format(report.taxPaid),
    },
    {
      label: 'Tax payable',
      value: currencyFormatter.format(report.taxPayable),
    },
    {
      label: 'Outstanding liability',
      value: currencyFormatter.format(report.outstandingLiability),
      tone: report.outstandingLiability === 0 ? 'success' : 'warning',
      description:
        report.outstandingLiability === 0
          ? 'No pending liability'
          : 'Review payable taxes before filing',
    },
    {
      label: 'Filing status',
      value: statusMap[report.filingStatus]?.label || report.filingStatus,
      tone: statusMap[report.filingStatus]?.tone,
      description: `Last updated ${new Date(report.lastUpdated).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })}`,
    },
  ];

  for (const item of summaryItems) {
    const wrapper = document.createElement('div');
    const dt = document.createElement('dt');
    dt.textContent = item.label;
    wrapper.append(dt);

    const dd = document.createElement('dd');
    dd.textContent = item.value;
    wrapper.append(dd);

    if (item.description) {
      const badge = document.createElement('span');
      badge.textContent = item.description;
      badge.className = `summary-grid__badge summary-grid__badge--${
        item.tone || 'warning'
      }`;
      wrapper.append(badge);
    }

    summaryGrid.append(wrapper);
  }
}

function renderSections(report) {
  sectionsTable.innerHTML = '';
  if (!report || report.sections.length === 0) {
    sectionsTable.innerHTML =
      '<tr><td colspan="6">No section level data found.</td></tr>';
    return;
  }

  const highlightVariance = varianceToggle.checked;

  report.sections.forEach((section) => {
    const row = document.createElement('tr');

    const variance = section.taxPaid - section.taxPayable;
    let varianceLabel = 'neutral';
    if (variance > 0) varianceLabel = 'positive';
    if (variance < 0) varianceLabel = 'negative';

    row.innerHTML = `
      <td><strong>${section.code}</strong></td>
      <td>${section.description}</td>
      <td>${currencyFormatter.format(section.taxableValue)}</td>
      <td>${currencyFormatter.format(section.taxPaid)}</td>
      <td>${currencyFormatter.format(section.taxPayable)}</td>
      <td>
        <span
          class="data-table__variance ${
            highlightVariance && variance !== 0
              ? 'data-table__variance--highlight'
              : ''
          }"
          data-variance="${varianceLabel}"
        >
          ${currencyFormatter.format(Math.abs(variance))}
        </span>
      </td>
    `;

    sectionsTable.append(row);
  });
}

function renderNotes(report) {
  notesList.innerHTML = '';
  if (!report) {
    notesList.innerHTML = '<li class="empty-state">No action items yet.</li>';
    return;
  }

  report.notes.forEach((note) => {
    const noteNode = noteTemplate.content.firstElementChild.cloneNode(true);
    noteNode.querySelector('.note__title').textContent = note.text;
    noteNode.querySelector(
      '.note__meta'
    ).textContent = `Owner: ${note.assignee}`;

    noteNode
      .querySelector('.note__delete')
      .addEventListener('click', () => {
        noteNode.remove();
      });

    notesList.append(noteNode);
  });
}

function exportSummary(report) {
  if (!report) {
    alert('Select a valid filing before exporting.');
    return;
  }
  const exportPayload = {
    generatedAt: new Date().toISOString(),
    ...report,
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `gstr9-summary-${report.gstin}-${report.financialYear}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function handleFiltersChange() {
  const report = getFilteredReport();
  renderSummary(report);
  renderSections(report);
  renderNotes(report);
}

function handleAddNote() {
  const report = getFilteredReport();
  if (!report) {
    alert('Select a valid filing before adding action items.');
    return;
  }
  const text = prompt('Describe the action item');
  if (!text) return;
  const assignee = prompt('Who is responsible?');

  const noteNode = noteTemplate.content.firstElementChild.cloneNode(true);
  noteNode.querySelector('.note__title').textContent = text;
  noteNode.querySelector('.note__meta').textContent = assignee
    ? `Owner: ${assignee}`
    : 'Owner: Unassigned';
  noteNode
    .querySelector('.note__delete')
    .addEventListener('click', () => noteNode.remove());

  notesList.prepend(noteNode);
}

function initialise() {
  populateFinancialYears();
  populateGstinOptions(financialYearSelect.value);

  financialYearSelect.addEventListener('change', (event) => {
    populateGstinOptions(event.target.value);
    handleFiltersChange();
  });

  gstinSelect.addEventListener('change', handleFiltersChange);
  statusSelect.addEventListener('change', handleFiltersChange);
  sectionSearch.addEventListener('input', handleFiltersChange);
  varianceToggle.addEventListener('change', handleFiltersChange);
  resetButton.addEventListener('click', () => {
    financialYearSelect.selectedIndex = 0;
    populateGstinOptions(financialYearSelect.value);
    gstinSelect.selectedIndex = 0;
    statusSelect.value = 'all';
    sectionSearch.value = '';
    varianceToggle.checked = false;
    handleFiltersChange();
  });

  exportButton.addEventListener('click', () => {
    const report = getFilteredReport();
    exportSummary(report);
  });

  addNoteButton.addEventListener('click', handleAddNote);

  handleFiltersChange();
}

initialise();
