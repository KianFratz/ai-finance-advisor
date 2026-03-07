from . import schemas


def generate_financial_advice(
    summary: schemas.SpendingSummary,
    breakdown: schemas.CategoryBreakdown,
) -> str:
    """
    Placeholder advisor logic. In a real system, this would call Gemini
    or another LLM using your GEMINI_API_KEY.
    """
    if not breakdown.items:
        return "I couldn't find spending data yet. Try uploading some transactions first."

    top_category = max(breakdown.items, key=lambda i: i.amount)
    if summary.total_income <= 0:
        return "Once you have income and spending data, I can help you analyze it."

    percent = (top_category.amount / summary.total_income) * 100
    target_reduction_pct = 15
    potential_savings = top_category.amount * (target_reduction_pct / 100)

    return (
        f"You spend about {percent:.1f}% of your income on {top_category.category}. "
        f"Reducing this by {target_reduction_pct}% could save roughly "
        f"{potential_savings:.2f} per month."
    )

