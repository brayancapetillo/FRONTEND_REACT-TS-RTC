export interface pieData {
    value: number,
    name: string
}

export interface PieDataChart {
    title: string,
    subtitle: string,
    data: pieData[]
}
