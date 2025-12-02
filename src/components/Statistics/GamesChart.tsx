import { useMemo, useState } from 'react';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Games } from '../../types';
import styled from 'styled-components';

const StyledSection = styled.div`
    border-radius: 15px;
    padding: 25px;
    margin: 15px 50px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};

    @media (max-width: 768px) {
        margin: 15px 20px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        margin: 10px;
        padding: 10px;
    }
`;

const StyledSectionTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 2px solid ${(props) => props.theme.colors.background};
    padding-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;

const StyledSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
    }
`;

const StyledSelect = styled.select`
    outline: none;
    border: none;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    cursor: pointer;
    transition: 0.3s ease;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 10px;
    }

    @media (max-width: 480px) {
        width: 100%;
        font-size: 14px;
    }
`;

const StyledChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

const StyledChartBar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: stretch;
        gap: 5px;
    }
`;

const StyledChartLabel = styled.div`
    min-width: 120px;
    font-size: 14px;

    @media (max-width: 768px) {
        min-width: 100px;
        font-size: 13px;
    }

    @media (max-width: 480px) {
        min-width: auto;
        font-size: 12px;
        text-align: center;
    }
`;

const StyledChartBarInner = styled.div`
    flex: 1;
    height: 30px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        height: 25px;
    }
`;

const StyledChartBarFill = styled.div<{ percentage: number }>`
    height: 100%;
    width: ${(props) => props.percentage}%;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    color: white;
    font-weight: bold;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
        padding-right: 8px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        padding-right: 5px;
    }
`;

const StyledNoData = styled.div`
    text-align: center;
    padding: 40px;
    color: ${(props) => props.theme.colors.textPrimary};
    opacity: 0.6;

    @media (max-width: 480px) {
        padding: 20px;
        font-size: 14px;
    }
`;

type TimeRange = 'day' | 'week' | 'month';

export const GamesChart = () => {
    const { isLoading, error, data: games } = useGetInfoQuery<Games>('games');
    const [timeRange, setTimeRange] = useState<TimeRange>('day');

    const gamesByTimeRange = useMemo(() => {
        if (!games || games.length === 0) return {};

        const grouped: Record<string, number> = {};

        games.forEach((game) => {
            const date = new Date(game.date);
            let key: string;

            if (timeRange === 'day') {
                key = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });
            } else if (timeRange === 'week') {
                const weekStart = new Date(date);
                weekStart.setDate(date.getDate() - date.getDay());
                key = `Week ${weekStart.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })}`;
            } else {
                key = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                });
            }

            grouped[key] = (grouped[key] || 0) + 1;
        });

        return grouped;
    }, [games, timeRange]);

    const chartData = useMemo(() => {
        const entries = Object.entries(gamesByTimeRange).sort((a, b) => {
            try {
                const dateA = new Date(a[0]).getTime();
                const dateB = new Date(b[0]).getTime();
                return dateA - dateB;
            } catch {
                return a[0].localeCompare(b[0]);
            }
        });

        const maxValue = Math.max(...entries.map(([, count]) => count), 1);

        return entries.map(([label, count]) => ({
            label,
            count,
            percentage: (count / maxValue) * 100,
        }));
    }, [gamesByTimeRange]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <StyledSection>
            <StyledSectionTitle>
                Number of games in a given period
            </StyledSectionTitle>
            <StyledSelectWrapper>
                <label htmlFor='timeRange'>Data range:</label>
                <StyledSelect
                    id='timeRange'
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value as TimeRange)}
                >
                    <option value='day'>Day</option>
                    <option value='week'>Week</option>
                    <option value='month'>Month</option>
                </StyledSelect>
            </StyledSelectWrapper>
            {chartData.length > 0 ? (
                <StyledChartContainer>
                    {chartData.map((item) => (
                        <StyledChartBar key={item.label}>
                            <StyledChartLabel>{item.label}</StyledChartLabel>
                            <StyledChartBarInner>
                                <StyledChartBarFill
                                    percentage={item.percentage}
                                >
                                    {item.count}
                                </StyledChartBarFill>
                            </StyledChartBarInner>
                        </StyledChartBar>
                    ))}
                </StyledChartContainer>
            ) : (
                <StyledNoData>No data to display</StyledNoData>
            )}
        </StyledSection>
    );
};
